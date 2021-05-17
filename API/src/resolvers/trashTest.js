/*const typeDefs = require('./src/product/schema');
const resolvers = require('./src/resolvers');
const {ApolloServer,gql} = require('apollo-server-express');
const {  PubSub } = require('apollo-server');


const usersRoute = require('./src/controllers/admin')
const productsRoute = require('./src/controllers/products')
//------------------------------------------------------------------------------------------


const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");







//--------------------------server and data connection-----------------------
const pubsub = new PubSub();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/admin',usersRoute)
app.use('/products',productsRoute)
app.get("/",(req,res)=>{
  res.send("welcome to my server ..")
})

const startServer = async () =>{

  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: ({ req }) => ({ req, pubsub })
  })
  
  server.applyMiddleware({app});

  await mongoose.connect('mongodb+srv://ghassen:ghassen@cluster0.csfj6.mongodb.net/BAZAAR?retryWrites=true&w=majority', 
  {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log(String.fromCodePoint(0x1F480) +' DATABASE CONNECTED  ');});
  app.listen({ port: 4000 }, () =>
    console.log(String.fromCodePoint(0x1F480) +` SERVERS ARE UP AND RUNNING  at http://localhost:4000${server.graphqlPath}`)
  );
  
  


};
startServer();







*/