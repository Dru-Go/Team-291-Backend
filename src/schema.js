'use strict';

// ANCHOR we define the schema which are used to structure the data flow b/n routes
import { buildSchema } from 'graphql';

const schema = buildSchema(`# ANCHOR this is the schema
# SECTION Query and mutations
type Query {
  hello: String
  accounts: [Account!]!
  breakdowns: [Vehicle_Breakdown]
  login(input: LoginInput): AuthDriverData!
  breakdownsByAccountID(id: String): [Vehicle_Breakdown]
}

type Mutation {
  signUp(input: SignUpInput): Account!
  newMechanic(input: MechanicInput): Mechanic!
  newBreakdown(input: BreakdownInput): [Messh]!
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
  account: String!
  company_name: String!
  company_img: String!
  company_phoneNo: String!
  company_relative_location: String!
  latitude: Float!
  longitude: Float!
}

input BreakdownInput {
  account: String!
  time_of_crisis: String!
  type_of_breakdown: VehicleFaliureTypes
  driver_comment: String
  license_plate_number: String # Serves as an id
  brand: String
  type: String
  color: String
  latitude: Float!
  longitude: Float!
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
  ADMIN
}
# !SECTION

# SECTION Types

type Messh {
  mechanic: Mechanic!
  distanceFromSource: Int!
}

type Location {
  latitude: Float
  longitude: Float
}

type Location_input {
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
  account: String
  time_of_crisis: String
  driver_comment: String
  # vehicle can have multiple faliure types
  type_of_breakdown: [VehicleFaliureTypes]
  vehicle: Vehicle!
  location: Location
}
# !SECTION


`);

export default schema;
