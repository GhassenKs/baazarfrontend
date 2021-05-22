const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
number :{type:Number , default : 1},
price : {type:String},
items:[{type:Schema.Types.ObjectId , ref : 'produits'}],
placedItems:[{type:Schema.Types.ObjectId , ref : 'produits'}],
user:{type:Schema.Types.ObjectId , ref : 'User'},
   
}); 
   
module.exports=mongoose.model('Order',orderSchema);