const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema=new Schema({
        
        id:Number,
        title: { type: String, index: true },
        description: String,
        type:{
            type :String,
            enum : ["electronics",
                "Dresses",
                "Skirts",
                "Ftshirts",
                "Fjackets",
                "Fjeans",
                "Fsports",
                "Fshoes",
                "Fnecklaces",
                "Fbraceletsrings",
                "Fcapshats",
                "Fpursesbags",
                "Mshirts",
                "Msweater",
                "Mjeans",
                "Mjackets",
                "Mblazers",
                "Msports",
                "Mshoes",
                "Mnecklaces",
                "Mbraceletsrings",
                "Mcapshats",
                "Mbags",
                "fashion",
                "Mfragrances",
                "Ffragrances",
                "Makeup",
                "Skincare",
                "Haircare",
                "chairs",
                "Tables",
                "beds",
                "desks",
                "mattresses",
                "dressers",
                "televisions",
                "TVreceivers",
                "projectors",
                "Sspeakers",
                "microwaves",
                "lights",
                "frigs",
                "digitalcameras",
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
                "videoslider",
                "light",
                "vegetables",
                "all"]
        },
        brand: String,
        PCollection: [String],
        
        category: String,
        price: Number,
        sale: Boolean,
        discount: String,
        picture:Number,
        stock: Number,
        new: Boolean,
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
produitSchema.index({'$**': 'text'});
module.exports=mongoose.model('produits',produitSchema);
