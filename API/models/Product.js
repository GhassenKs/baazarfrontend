const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    
        title: String,
        description: String,
        brand: String,
        category: String,
        price: String,

});
module.exports=mongoose.model('Product',productSchema);