const usersResolvers = require('./users');
const productResolvers =require('../product/resolver')
const orderResolvers = require('./orders')
//const produitResolvers =  require('./produits')
module.exports = {
    Query:{
        ...usersResolvers.Query,
        ...productResolvers.Query,
        ...orderResolvers.Query
    },
    Mutation : {
        ...usersResolvers.Mutation,
        ...orderResolvers.Mutation
    }

}
