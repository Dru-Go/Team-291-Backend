'use strict';

// ANCHOR we define the schema which are used to structure the data flow b/n routes
import { buildSchema } from 'graphql';

const schema = buildSchema(` 
# ANCHOR this is the schema
type Query {
	hello: String
	"""
	Gets all the accounts present in the system
	"""
	accounts: [Account!]!
	vehicles: [Vehicle!]!
	mechanics: [Mechanic!]!
	drivers: [Driver!]!
	accounts_by_id(id: String): Account!
	vehicle_by_licence(licence: String): Vehicle!
	vehicles_by_accountID(id: String): [Vehicle]
    mechanics_details(id: String): Mechanic
	login(input: LoginInput): AuthDriverData!
}

input LoginInput {
	email: String!
	password: String!
}

type Mutation {
	login(input: LoginInput): Account!
	signUp(input: SignUpInput): Account!
	newMechanic(input: MechanicInput): Mechanic!
	newBreakdown(input: BreakdownInput): [Mechanic]!
	newVehicle(input: VehicleInput): Vehicle!
}

type Location {
	latitude: Float
	longitude: Float
}

type AuthDriverData {
	driverId: ID!
	token: String!
	tokenExpiration: Int!
}

input VehicleInput {
	id: ID!
	license_plate_number: String! # Serves as an id
	brand: String!
	type: String!
	color: String
}

input MechanicInput {
	account: ID!
	company_name: String!
	company_img: String
	company_relative_location: String!
	company_absolute_location: String! # lat long
}

input BreakdownInput {
	account_id: String!
	time_of_injury: String!
	type_of_breakdown: [VehicleFaliureTypes]
	driver_comment: String
	license_plate: String!
	location: Location!
}

input SignUpInput {
	first_name: String!
	last_name: String!
	email: String!
	password: String!
	profile_img: String
	account_type: AccountType!
}

enum VehicleFaliureTypes {
	TIRE
	ENGINE
	FUEL
	BREAK_LIGHTS
	# and many more
}

enum AccountType {
	MECHANIC
	DRIVER
}

# Here we have a Driver with
type Driver {
	account: Account
	# one driver can have multiple vehicles
	vehicle_info: [Vehicle]
	# one driver can have multiple breakdowns
	vehicle_breakdowns: [Vehicle_Breakdown]
}

type Account {
	id: String
	profile_img: String
	first_name: String
	last_name: String
	phone_no: String
	password: String
	account_type: AccountType
}

type Mechanic {
	account: ID
	company_name: String
	company_img: String
	company_relative_location: String
	company_absolute_location: Location # lat long
	# mechanic with multiple reviews
	reviews: [String]
}

type Vehicle {
	license_plate_number: String # Serves as an id
	brand: String
	type: String
	color: String
}

type Vehicle_Breakdown {
	id: ID
	time_of_injury: String
	driver_comment: String
	# vehicle can have multiple faliure types
	type_of_breakdown: [VehicleFaliureTypes]
	license_plate: String
	location: Location
}

`);

export default schema;
