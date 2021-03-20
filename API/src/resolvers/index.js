const usersResolvers = require('./users');
const productResolvers =require('../product/resolver')

module.exports = {
    Query:{
        ...usersResolvers.Query,
        ...productResolvers.Query
    },
    Mutation : {
        ...usersResolvers.Mutation
    }

}
