const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        greetings: String
        welcome(name:String!):String
        getUserInfo: [UserInfo]
        getTodos:[TODO]
        getUserData: [User]
        getUserDataById(id:ID!): User
    }

    type UserInfo {
    id:ID!
    name:String!
    age:Int!
    status:Boolean!
    }

    type TODO {
    id:ID!
    title:String!
    completed:Boolean!
    userId:Int!
    }

    type User{
    id:ID!
    name:String!
    username:String!
    email:String!
    phone:String!
    address:Address
    }

    type Address{
    street:String!
    city:String!
    zipcode:String!
    geo: Geo
    }

    type Geo {
    lat:String!
    lng:String!
    }

    // #Mutatation for saving
    // type Mutation {
    // create(id: ID!, name: String!, age:Int!, status: Boolean!)
    // }
`;

module.exports = {typeDefs}