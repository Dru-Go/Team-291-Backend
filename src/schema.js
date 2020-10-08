'use strict';

// ANCHOR we define the schema which are used to structure the data flow b/n routes
import { buildSchema } from 'graphql';

const schema = buildSchema(` 
# ANCHOR this is the schema
# SECTION Query and mutations
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
	breakdowns: [Vehicle_Breakdown]
}

type Mutation {
	signUp(input: SignUpInput): Account!
	newMechanic(input: MechanicInput): Mechanic!
	newBreakdown(input: BreakdownInput): [Mechanic]!
	newVehicle(input: VehicleInput): Vehicle!
}
# !SECTION

# SECTION Inputs for queries and mutations

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
	company_img: String!
	company_phoneNo: String!
	company_relative_location: String!
	company_absolute_location: Location! # lat long
}

input BreakdownInput {
	account_id: String!
	time_of_injury: String!
	type_of_breakdown: [VehicleFaliureTypes]
	driver_comment: String
	vehicle: Vehicle!
	location: Location!
}

input LoginInput {
	phone: String!
	password: String!
}


input SignUpInput {
	first_name: String!
	last_name: String!
	phone: String!
	password: String!
	profile_img: String
	account_type: AccountType!
}
# !SECTION

# SECTION Enums
enum VehicleFaliureTypes {
	TIRE
	ENGINE
	FUEL
	BREAK_LIGHTS
	WARNING_LIGHTS
	SPUTTERING_ENGINE
	DEAD_BATTERY
	FLAT_TYRES
	BREAKS_SQUEAKING__Grinding
	ALTERNATOR_FAILURE
	BROKEN_STARTER_MOTOR
	STEERING_WHEEL_SHAKING
	FAILED_EMISSIONS
	OVERHEATING
	SLIPPING_TRANSMISSION
	BATTARY_FALIURE
	# and many more
}

enum AccountType {
	MECHANIC
	DRIVER
}
# !SECTION

# SECTION Types
type Location {
	latitude: Float
	longitude: Float
}

type AuthDriverData {
	driverId: ID!
	token: String!
	tokenExpiration: Int!
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
	phone: String
	password: String
	account_type: AccountType
}

type Mechanic {
	account: ID
	company_name: String!
	company_img: String!
	company_relative_location: String!
	company_phoneNo: String!
	company_absolute_location: Location! # lat long
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
	vehicle: Vehicle!
	location: Location
}
# !SECTION


`);

export default schema;
