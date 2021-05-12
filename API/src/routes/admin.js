const express = require("express");
const router = express.Router();

const  { signin, signup } =require ('../controllers/admin.js')

router.post("/signin", function(req,res){
    signin
});

module.exports= router;