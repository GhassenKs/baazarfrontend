const express = require('express')
const Product = require('../../models/produit')
const Order = require('../../models/order')
const router = express.Router();
//START products CRUD system

//start of READ all data products  

router.get('/products',async (req,res)=>{
    const {id} = req.body
    
    try {
        const produits = await Product.find();
        if(!produits){
            return res.status(404).json({message:"there is no existing products"})
        }
        res.status(200).json({result:produits});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Bad request"})
    }



});
//end
//start of READ only one document per ID

router.get('/product',async(req,res)=>{
  
    
    console.log("i am searching for a product " + req.query.id)
    console.log(typeof req.query.id)
    try {
        const produit= await Product.findOne({id:req.query.id});
        if(!produit){
            return res.status(404).json({message:"there is no product with such id"})
        }
        res.status(200).json({result:produit})
        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Bad request"})
    }

})
//end

//start of DELETE product
router.put( "/productDelete", async(req,res)=>{
    
    try {
        
        const produit = await Product.findOneAndDelete({id:req.body.id});
        console.log("i am deleting the product " + req.body.id)
        if(!produit)return res.status(404).json({message:"there is no existing product"})
        res.status(200).json({result:produit});



    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
})


//end

//start of READ all data orders  

router.get('/orders',async (req,res)=>{
    const {id} = req.body
     
    try {
        const produits =  await Order.find().populate("items").populate("placedItems").populate("user").exec()
        if(!produits){
            return res.status(404).json({message:"there is no existing orders"})
        }
        res.status(200).json({result:produits});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Bad request"})
    }



});
//end



module.exports = router