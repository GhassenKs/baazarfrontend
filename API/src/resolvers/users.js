const User = require('../../models/user')
const Order = require ('../../models/order')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validateRegisterInput,validateLoginInput}= require('../util/validators')
const {UserInputError} = require ('apollo-server');
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName:user.lastName,
      city:user.city,
      zip:user.zip,
      address:user.address,
      phone:user.phone
    },
    'SECRET_KEY',
    { expiresIn: '5h' }
  );
}

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
      
            const token = generateToken(user);
              return {
                  ...user._doc,
                  id:user._id,
                  token
              }
          },
         async register(_,{registerInput:{firstName,lastName,email,password,phone,city,address,zip}},context,info){
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
                  password,
                  phone,
                  city,
                  address,
                  zip
              });

              const res = await newUser.save();
              console.log("workiiiiing")
              console.log(newUser)
//-------------
const newOrder = new Order({
  user:newUser._id
});

 newOrder.save();

//---------------


              const token = generateToken(res);
              
              return {
                  ...res._doc,
                  id:res._id,
                  token
              }

          },async updateUser(_,args,context,info){
            const updatedUser = await User.findOneAndUpdate({email:args.email},
              {firstName:args.firstName ,
               lastName:args.lastName,
               email:args.email,
               phone:args.phone,
               city:args.city,
               address:args.address,
               zip:args.zip

              },
              {new:true}
              )
            console.log(updatedUser)
              
            const token = generateToken(updatedUser);
              
              return {
                  ...updatedUser._doc,
                  id:updatedUser._id,
                  token
              }
            


          }

      }
}