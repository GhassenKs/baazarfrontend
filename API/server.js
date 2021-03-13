
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./src/product/schema')
const resolvers = require('./src/product/resolver')

//------------------------------------------------------------------------------------------

//---------------old packages------------



const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./models/user");


app.use(cors({
  origin:'*'
}));

mongoose.connect('mongodb+srv://admin:admin@cluster0.ihnhs.mongodb.net/TESTG?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(

  cors({
    origin: "*" })
);
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





//----------------------------------------------------------------------------
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})

server.listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log('Server is running on localhost:4000', url))
  //express server
  app.listen(4001, () => {
    console.log(`Example app listening at http://localhost:4001`)
  })