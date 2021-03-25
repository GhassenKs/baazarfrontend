const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema=new Schema({
    
    
    title:String,
    price:String,
    Description:String

});
module.exports=mongoose.model('Produit',productSchema);
