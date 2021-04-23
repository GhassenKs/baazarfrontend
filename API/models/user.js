const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    zip:{type:Number},
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{type:String},
    
    address:{type:String},
    city:{type:String},

    

});
module.exports=mongoose.model('User',userSchema);