const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const adminSchema = new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    id:{type:Number},
    role:{type:String}
    
    });

    module.exports=mongoose.model('Admin',adminSchema); 