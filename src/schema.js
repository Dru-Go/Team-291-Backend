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
    drivers: [Driver!]!
    accounts_by_id(id: String): Account!
    vehicle_by_licence(licence: String): Vehicle!
    vehicles_by_accountID(id: String): [Vehicle]
    mechanics(loc: String): [Mechanic]
    mechanics_details(id: String): Mechanic
}

type Mutation{
    login(input: LoginInput): Account!
    signUp(input: SignUpInput): Account!
    newBreakdown(input: BreakdownInput): Vehicle_Breakdown!
}


input BreakdownInput{
    account_id: String
    time_of_injury: String
    type_of_breakdown: [VehicleFaliureTypes]
    location: String
}

input LoginInput{
    user_name: String! 
    password: String!
}

input SignUpInput{
    phone_number: String!
    user_name: String! 
    password: String!
}

enum VehicleFaliureTypes{
	TIRE 
	ENGINE
	FUEL
	BREAK_LIGHTS
    # and many more
}

enum AccountType{
    MECHANIC
    DRIVER
}

# Here we have a Driver with 
type Driver{
	account: Account
    # one driver can have multiple vehicles
	vehicle_info: [Vehicle] 
    # one driver can have multiple breakdowns
    vehicle_breakdowns: [Vehicle_Breakdown] 
}

type Account{
    id: String
    profile_img: String
    phone_number: String
	user_name: String
	password: String
    accountType: AccountType
}

type Mechanic{
    account: Account
    location: String 
    company_name: String
    company_img: String
    company_relative_location: String
    company_absolute_location: String
    # mechanic with multiple reviews
    reviews: [String]
}

type Vehicle{
    license_plate_number: String # Serves as an id 
    brand: String
    type: String
    color: String
}

type Vehicle_Breakdown{
    id: String
    time_of_injury: String
    driver_comment: String
    # vehicle can have multiple faliure types
    type_of_breakdown: [VehicleFaliureTypes]
    location: String
}
`);

export default schema;
