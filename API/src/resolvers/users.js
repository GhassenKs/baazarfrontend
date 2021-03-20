const User = require('../../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validateRegisterInput,validateLoginInput}= require('../util/validators')
const {UserInputError} = require ('apollo-server');
module.exports ={
  Query: {
    async getUsers() {
      try {
        const users = await User.find()
        return users;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
    
      Mutation :{
        async login(_, { email, password }) {
            const { errors, valid } = validateLoginInput(email, password);
      
            if (!valid) {
              throw new UserInputError('Errors', { errors });
            }
      
            const user = await User.findOne({ email });
      
            if (!user) {
              errors.general = 'User not found';
              console.log("user doesn't exist");
              throw new UserInputError('User not found', { errors });
              
            }
      
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
              errors.general = 'Wrong crendetials';
              throw new UserInputError('Wrong crendetials', { errors });
            }
      
            const token = jwt.sign({},'secret key',{expiresIn: '1h'});
              return {
                  ...user._doc,
                  id:user._id,
                  token
              }
          
          },
         async register(_,{registerInput:{firstName,lastName,email,password}},context,info){
              //TODO validate infos
              const {valid,errors}=validateRegisterInput(firstName,lastName,email,password);
              if(!valid){
                  throw new UserInputError('Errors',{errors}) ;
                   
              }
              //TODO make sure the user doesn't exist
              const user = await User.findOne({email});
              if(user){
                throw new UserInputError('email is taken',{
                    errors:{
                        email:"this email is taken"
                    }
                })
              }
              //TODO hashed password and creeate auth token 
              password = await bcrypt.hash(password,12);
              const newUser = new User({
                  firstName,
                  lastName,
                  email,
                  password
              });

              const res = await newUser.save();
              const token = jwt.sign({},'secret key',{expiresIn: '1h'});
              return {
                  ...res._doc,
                  id:res._id,
                  token
              }

          }
      }
}