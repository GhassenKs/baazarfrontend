const express = require('express')
const Product = require('../../models/produit')
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
    console.log("i have been launched ")
    const {id}=req.body
    try {
        const produit= await Product.findOne({id:id});
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
router.put( "/orderDelete", async(req,res)=>{
    const {id}= req.body;
    try {
        
        const produit = await Product.findOneAndDelete({id});

        if(!produit)return res.status(404).json({message:"there is no existing user"})
        res.status(200).json({result:produit});



    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
})




module.exports = router