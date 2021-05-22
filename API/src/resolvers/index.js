const usersResolvers = require('./users');
const productResolvers =require('../product/resolver')
const orderResolvers = require('./orders')
const listResolvers = require('./lists')
//const produitResolvers =  require('./produits')
module.exports = {
    Query:{
        ...usersResolvers.Query,
        ...productResolvers.Query,
        ...orderResolvers.Query,
        ...listResolvers.Query
    },
    Mutation : {
        ...usersResolvers.Mutation,
        ...orderResolvers.Mutation,
        ...listResolvers.Mutation
    }


}
