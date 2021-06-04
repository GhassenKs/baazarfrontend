const bcrypt = require('bcryptjs');
const express = require("express");
const jwt = require('jsonwebtoken');
const Admin = require('../../models/admin')
const User = require('../../models/user')
const router = express.Router();
const {validateRegisterInput,validateLoginInput}= require('../util/validators')
const mongoose = require('mongoose')
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
//-----------------------------------------------------------------------------------------USERS CRUD

//start CREATE  user 
router.post( "/addUser", async(req,res)=>{
    const {firstName,lastName,email,pass,phone}= req.body;
    try {
        console.log(req.body)
         
            const user = await User.findOne({email});
            if(user){
                return res.status(404).json({message:"this email is taken"})
            }
               
            password = await bcrypt.hash(pass,12);
            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                phone
                
                
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
//all users READ request
router.get( "/users", async(req,res)=>{
    
    try {
        await console.log("trying to get all users")
        const users = await User.find({},{firstName:1,lastName:1,phone:1,email:1,city:1});
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

//start update user 
router.put( "/userUpdate", async(req,res)=>{
    const {firstName,lastName,email,phone,city}= req.body;
    try {
        mongoose.set('useFindAndModify', false);
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            {
              $set: {
                firstName: firstName,
                lastName:lastName,
                phone:phone,
                city:city
              }
            },
            {
                returnOriginal: false
            }
          )
            res.status(200).json({result:updatedUser});
           
            
 
        

    } catch (error) {
        res.status(500).json({message:"something went wrong"})
        console.log(error)
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

//-----------------------------------------------------------------------------------------ADMINS CRUD

//start CREATE  user admin
router.post( "/addAdmin", async(req,res)=>{
    const {firstName,lastName,email,pass,role}= req.body;
    try {
        console.log(req.body)
         
            const user = await Admin.findOne({email});
            if(user){
                return res.status(404).json({message:"this email is taken"})
            }
            const id=await Math.floor(Math.random() * 1000)      
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

//Read all admins 
router.get( "/admins", async(req,res)=>{
    let auth = req.query.role;
    console.log(req.query.role)
    try {
        await console.log("trying to get all users")
        var users;
        if(auth=="admin"){
             users = await Admin.find({role:"employee"},{firstName:1,lastName:1,role:1,email:1});
        }
        else{
             users = await Admin.find({},{firstName:1,lastName:1,role:1,email:1});
        }
        
        if(!users)return res.status(404).json({message:"there is no existing user"})
        res.status(200).json({result:users});



    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
})
//end
//start update user admin
router.put( "/adminUpdate", async(req,res)=>{
    const {firstName,lastName,email,role}= req.body;
    console.log("i am updated")
    console.log(req.body)
    try {
        mongoose.set('useFindAndModify', false);
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


module.exports = router