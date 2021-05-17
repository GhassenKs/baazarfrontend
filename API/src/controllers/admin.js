const bcrypt = require('bcryptjs');
const express = require("express");
const jwt = require('jsonwebtoken');
const Admin = require('../../models/admin')
const User = require('../../models/user')
const router = express.Router();
const {validateRegisterInput,validateLoginInput}= require('../util/validators')
//authentication API 

router.post( "/signin", async(req,res)=>{
    const {email,password}= req.body;
    try {
        await console.log("waiting")
        const existingUser = await Admin.findOne({email});
       
        if(!existingUser)return res.status(404).json({message:"User doesn't exist"})
        const isPassword = await bcrypt.compare(password,existingUser.password);
        if(!isPassword) return res.status(400).json({message:"invalid credentials"})

        const token = jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn : "8h"})

        res.status(200).json({result:existingUser, token});


    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
})
//end of auth router 

//all users READ request
router.get( "/users", async(req,res)=>{
    
    try {
        await console.log("trying to get all users")
        const users = await User.find();
        if(!users)return res.status(404).json({message:"there is no existing user"})
        res.status(200).json({result:users});



    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
})

//end of READ all users API
 

//start READ one user

router.get( "/user", async(req,res)=>{
    const {email}= req.body;
    try {
        await console.log("trying to get all users")
        const users = await User.findOne({email});
        if(!users)return res.status(404).json({message:"there is no existing user"})
        res.status(200).json({result:users});



    } catch (Error) {
        res.status(500).json({message:"something went wrong"})
        console.log(Error)
    }
})
//end
//start delete User
router.put( "/userDelete", async(req,res)=>{
    const {email}= req.body;
    try {
        
        const users = await User.findOneAndDelete({email});
        console.log("i am deleting the admin " + req.body.email)
        if(!users)return res.status(404).json({message:"there is no existing user"})
        res.status(200).json({result:users});



    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
})

//start CREATE  user admin
router.post( "/user", async(req,res)=>{
    const {firstName,lastName,email,pass,role,id}= req.body;
    try {
        console.log(req.body)
         
            const user = await Admin.findOne({email});
            if(user){
                return res.status(404).json({message:"this email is taken"})
            }
            
      
            password = await bcrypt.hash(pass,12);
            const newUser = new Admin({
                firstName,
                lastName,
                email,
                password,
                role,
                id
                
            });

            const registered = await newUser.save();
            const token = jwt.sign({email:registered.email,id:registered._id},'test',{expiresIn : "8h"})
            res.status(200).json({result:registered,token});
           
            
 
        

    } catch (error) {
        res.status(500).json({message:"something went wrong"})
        console.log(error)
    }
}) 
//end
//start update user admin
router.put( "/user", async(req,res)=>{
    const {firstName,lastName,email,role}= req.body;
    try {
        const updatedAdmin = await Admin.findOneAndUpdate(
            { email: email },
            {
              $set: {
                firstName: firstName,
                lastName:lastName,
                role:role
              }
            },
            {
                returnOriginal: false
            }
          )
            res.status(200).json({result:updatedAdmin});
           
            
 
        

    } catch (error) {
        res.status(500).json({message:"something went wrong"})
        console.log(error)
    }
}) 
//end
//start DELETE admin 

router.put( "/adminDelete", async(req,res)=>{
    const {email}= req.body;
    try {
        
        const users = await Admin.findOneAndDelete({email});
        console.log("i am deleting the admin " + req.body.email)
        if(!users)return res.status(404).json({message:"there is no existing user"})
        res.status(200).json({result:users});



    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
})


//end
//Read all admins 
router.get( "/admins", async(req,res)=>{
    
    try {
        await console.log("trying to get all users")
        const users = await Admin.find({},{firstName:1,lastName:1,role:1});
        if(!users)return res.status(404).json({message:"there is no existing user"})
        res.status(200).json({result:users});



    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
})


module.exports = router