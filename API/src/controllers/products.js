const express = require('express')
const Product = require('../../models/produit')
const Order = require('../../models/order')
const router = express.Router();
const mongoose = require('mongoose')

//START products CRUD system

//start of READ all data products  

router.get('/products',async (req,res)=>{
    const {id} = req.body
    
    try {
        const produits = await Product.find({},{_id:1,title:1,description:1,type:1,collection:1,category:1,price:1,sale:1,stock:1,discount:1,new:1});
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

//start of READ all data products --VERSION2 

router.get('/productsv2',async (req,res)=>{
    const {id} = req.body
    
    try {
        const produits = await Product.find({},{_id:1,id:1,title:1,description:1,type:1,collection:1,category:1,price:1,sale:1,stock:1,discount:1,new:1,images:1});
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
//start update product 
router.put( "/productUpdate", async(req,res)=>{
    const {_id,id,title,description,type,collection,category,price,sale,stock,discount }= req.body;
     
    try {
        mongoose.set('useFindAndModify', false);
        const intid = await parseInt(id, 10)
        const intprice = await parseInt(price, 10)
        const intstock =await  parseInt(stock, 10)
        var saled= false
        if(sale=="true"){
             saled=true
        }
        var newed= false
        if(req.body.new=="true"){
             newed=true
        }
        console.log(saled)
        const updatedProduct = await Product.findOneAndUpdate(
            { _id: _id },
            {
              $set: {
                id:intid,
                title:title,
                description:description,
                type:type,
                collection:collection,
                category:category,
                price:intprice,
                sale:saled,
                stock:intstock, 
                discount:discount,
                new:newed
              }
            },
            {
                returnOriginal: false
            }
          )
            res.status(200).json({result:updatedProduct});
           
            
 
        

    } catch (error) {
        res.status(500).json({message:"something went wrong"})
        console.log(error)
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
     console.log("tested")
    try {
        const produits =  await Order.find({},{_id:1}).populate("items").populate("placedItems").populate("user").exec()
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