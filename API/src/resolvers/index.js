const usersResolvers = require('./users');
const productResolvers =require('../product/resolver')
//const produitResolvers =  require('./produits')
module.exports = {
    Query:{
        ...usersResolvers.Query,
        ...productResolvers.Query
    },
    Mutation : {
        ...usersResolvers.Mutation,
    }

}
