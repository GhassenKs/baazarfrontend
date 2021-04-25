/*

{products(indexFrom:1,limit:10,type:fashion,text:"choker neck top",brand:["denim"],size:["s","m"],color:"blue",sortBy:HighToLow,priceMin:10 ,priceMax:500){items{title}}}












*************************************




const products = require('./data');
const loadCurrency = require('../currency/data')
const InstagramData = require('../instagram/data')
const BlogData = require('../Blogs/data');
const _ = require('lodash')
const ProductResponse = require('./schema')
const Fuse = require('fuse.js');

console.log(" Database connected ")
const resolvers = {
  Query: {
    
    products: async (root, args, context, info) => {
      //var produits =await products.find({});
      
      //console.log(typeof produits)
      const fuse = new Fuse(products, {
        threshold: 0.6,
        minMatchCharLength: 2,
        keys: ['title', 'brand', 'category', 'type'],
      })
      

      if (args.text && args.text !== '') {
        
        products = fuse.search(args.text);
      }
      const getVisibleproducts = () => {
        
        return products.filter(product => {

          let typeMatch;
          if (args.type && product.type)
            typeMatch = product.type === args.type
          else
            typeMatch = true;


          let categoryMatch;
          if (args.category && product.category)
            categoryMatch = args.category.includes(product.category)
          else
            categoryMatch = true;

          let brandMatch;
          if (undefined !== args.brand && args.brand.length && product.brand)
            {
              console.log("I call if",args.brand, product.brand);
              brandMatch = args.brand.includes(product.brand)}
          else
            {
              console.log("I call else");
              brandMatch = true;}

          let colorMatch;
          if (args.color && product.variants) {
            colorMatch = product.variants.some(vari => vari.color === args.color)
          } else {
            colorMatch = true;
          }

          let sizeMatch;
          if (args.size && product.variants) {
            sizeMatch = product.variants.some(vari => vari.size === args.size)
          } else {
            sizeMatch = true;
          }

          const startPriceMatch = typeof args.priceMin !== 'number' || args.priceMin <= product.price;
          const endPriceMatch = typeof args.priceMax !== 'number' || product.price <= args.priceMax;

          return typeMatch && brandMatch && colorMatch && sizeMatch && startPriceMatch && endPriceMatch;
        }).sort((product1, product2) => {
          

          if (args.sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
          } else if (args.sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
          } else if (args.sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
          } else if (args.sortBy === 'AscOrder') {
            return product1.title.localeCompare(product2.title);
          } else if (args.sortBy === 'DescOrder') {
            return product2.title.localeCompare(product1.title);
          } else {
            return product2.id > product1.id ? -1 : 1;
          }
        });
      }
      
      const items = products
      const types = args.type !== 'all' ? args.type : items
      const brands = args.brand !== [] ? args.brand : items
      const colors = args.color !== "" ? args.color : items
      const sortBy = args.sortBy !== [] ? args.sortBy : items
      const sizes = args.size !== [] ? args.size : items
      console.log("brands",brands);
      console.log("items..........",items.length);

      const filterData = getVisibleproducts(items, types, brands, colors, sortBy, sizes);
      const total = filterData.length;
      console.log("filter data", filterData);

      if (args.type === 'all') {
        return {
          items: products.slice(args.indexFrom, args.indexFrom + args.limit),
          total : products.length,
          hasMore: products.length > args.indexFrom + args.limit 
        }
      }  else {
        return {
          items: filterData.slice(args.indexFrom, args.indexFrom + args.limit),
          hasMore: total > args.indexFrom + args.limit,
          total,
        }
      }
      
    },

    product: async (root, args, context, info) => {
      
      const result = await products.findOne({id:args.id}) 
      console.log(typeof result)
      console.log(result)
      return result
      
    
    
    },
    productByType: (root, args, context, info) => {
      const prods = products.find({type : args.type})
      console.log(typeof prods)
      return prods

  },
    productByCategory: (root, args, context, info) => {
      console.log("args", args);
      return products.find({category : args.category})
    },
    
    instagram: (root, args, context, info) => InstagramData.filter(e => e.type === args.type),
    blog: (root, args, context, info) => BlogData.filter(e => e.type === args.type),

    getBrands:async (root, args, context, info) => {
      const data = await products.find( {type :args.type} );
      console.log(data)
      const brands = [...new Set(data.map(item => item.brand))]
      return { brand: brands };
    },
    getColors:async  (root, args, context, info) => {
      const produits = await products.find()
      console.log(produits)
      const color = []
      const data = produits.filter(item => item.type === 'fashion' || item.type === args.type)
      data.filter((product) => {
        product.variants.filter((variant) => {
          if (variant.color) {
            const index = color.indexOf(variant.color)
            if (index === -1) color.push(variant.color)
          }
        })
      })
      return { colors: color };
    },
    getSize: async (root, args, context, info) => {
      
      const sizes = []
      //const data = products.filter(item => item.type === 'fashion' || item.type === args.type)
      const data = products.find({$or: [{ type: "fashion" }, { type: args.type }]})
      console.log(data.variants)
      
      data.find((product) => {
        product.variants.find((variant) => {
          if (variant.size) {
            const index =  sizes.indexOf(variant.size)
            if (index === -1) sizes.push(variant.size)
          }
        })
      })
      return { size: sizes };
    },
    newProducts: async (root, args, context, info) => {
      
      return products.find({type:args.type, new:"true"})
      
    },
    /*async produits() {
      try {
        const produits = await products.find()
        return produits;
      } catch (err) {
        throw new Error(err);
      }
    },*/
    /*
     produits :async ()=> {
      try {
        //const produits =  products.find()
       await products.find({}, function (err, docs) {
          if(err) console.log(err)
          console.log(docs);
          console.log("---------------------------------------------------tt-------------------------");
          return docs;
        });
       
      } catch (err) {
        throw new Error(err);
      }
    },
    getProducts: async (root, args, context, info) => {
        const indexFrom = 0;
        const produits = await products.find();
        console.log( produits);
        return produits.splice(indexFrom, indexFrom + args.limit);
      },  
      getCurrency: () => {
        return loadCurrency;
      },
  
      //------------------------new edit
      
  
  
  
  
  
      //------------------------------end of new edit
    },
  
    Product: {
      id: parent => parent.id,
      title: parent => parent.title,
    }
  };
  
  module.exports = resolvers


type Mutation {
      register(registerInput:RegisterInput):User!
      login(email:String!,password:String!): User!
      createproduit(title:String,price:String):Produit!
    }
type Produit {
        id:Int!
        title: String
        description: String
        type: _CategoryType
        brand: String
        PCollection: [String]
        category: String
        price: String
        sale: String
        discount: String
        picture:Int
        stock: Int
        new: String
        tags: [String]
        variants: [Variants]
        images:[Images]
        sortBy: _SortBy
      }

*/