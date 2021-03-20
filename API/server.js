//const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/product/schema');
//const resolvers = require('./src/product/resolver');
const resolvers = require('./src/resolvers');
const {ApolloServer,gql} = require('apollo-server-express');
const {  PubSub } = require('apollo-server');
//------------------------------------------------------------------------------------------


const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");

const User = require("./models/user");


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


//------------------------------auth
/*

app.use(cors({
  origin:'*'
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/user", (req, res) => {
  res.send("hello"); 
});
*/





//----------------------------------------------------------------------------
