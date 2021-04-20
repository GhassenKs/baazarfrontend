Produit = require('../../models/produit');
module.exports ={
    Query: {
        async produits() {
          try {
            const produits = await Produit.find()
            return produits;
          } catch (err) {
            throw new Error(err);
          }
        }
      },
      Mutation: {
       async createproduit(_,{title,price},context,info){
        const nouveauProduit = new Produit({
            title,
            price
        });

        const res = await nouveauProduit.save();
        return (res);
    }
      }


}