const typeDefs = require('./src/product/schema');
const resolvers = require('./src/resolvers');
const {ApolloServer,gql} = require('apollo-server-express');
const {  PubSub } = require('apollo-server');
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
  {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("Database connected")});
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
  
  


};
startServer();







