const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema=new Schema({
        
        id:Number,
        title: String,
        description: String,
        type:{
            type :String,
            enum : ["electronics",
                "vegetables",
                "furniture",
                "jewellery",
                "fashion",
                "beauty",
                "flower",
                "tools",
                "watch",
                "metro",
                "shoes",
                "bags",
                "kids",
                "game",
                "gym",
                "pets",
                "portfolio",
                "goggles",
                "videoslider",
                "marijuana",
                "nursery",
                "christmas",
                "marketplace",
                "light",
                "all"]
        },
        brand: String,
        PCollection: [String],
        category: String,
        price: String,
        sale: String,
        discount: String,
        picture:Number,
        stock: Number,
        new: String,
        tags: [String],
        variants:[ {
            variant_id:String,
            id:String,
            sku:String,
            size:String,
            color:String,
            image_id:Number
        }],
        images:[{
            image_id: Number,
        id: String,
        alt: String,
        src: String
        }]


});

module.exports=mongoose.model('produits',produitSchema);
