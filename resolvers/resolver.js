const {default: axios} = require("axios");

const resolvers = {
    Query: {
        greetings: () => 'welcome to graphql',
        welcome: (parent, args) => `Hello ${args.name}`,
        getUserInfo: () => [
            {id:1,name:'ABC',age:12,status:true},
            {id:2,name:'PQR',age:13,status:false},
            {id:3,name:'XYZ',age:14,status:true},
        ],

        getTodos: async () => (await axios.get('https://jsonplaceholder.typicode.com/todos')).data,
        getUserData: async() => (await axios.get('https://jsonplaceholder.typicode.com/Users')).data,
        getUserDataById: async(parent, {id}) => (await axios.get(`https://jsonplaceholder.typicode.com/Users/${id}`)).data,
    },

    // Mutation: {
    //     create: asyn (parent, args) => {
    //         (await axios.post(`api call`)).data;
    //     },
    // },
};

module.exports = {resolvers};