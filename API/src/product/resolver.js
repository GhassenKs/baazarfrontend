const produits = require('../../models/produit');
const products = require('./data');
const loadCurrency = require('../currency/data')
const InstagramData = require('../instagram/data')
const BlogData = require('../Blogs/data');
const _ = require('lodash')
const ProductResponse = require('./schema')
const Fuse = require('fuse.js');

const resolvers = {
  Query: {
    products: async (root, args, context, info) => {
      var produit =await produits.find({});
      //console.log( produits)
      console.log("working yet")
      const fuse = new Fuse(produit, {
        threshold: 0.6,
        minMatchCharLength: 2,
        keys: ['title', 'brand', 'category', 'type'],
      })
      

      if (args.text && args.text !== '') {
       // console.log(args.text)
        produit = fuse.search(args.text);
      }
      const getVisibleproducts = () => {
        
        return produit.filter(product => {

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
              //console.log("I call else");
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
      
      const items = produit
      const types = args.type !== 'all' ? args.type : items
      const brands = args.brand !== [] ? args.brand : items
      const colors = args.color !== "" ? args.color : items
      const sortBy = args.sortBy !== [] ? args.sortBy : items
      const sizes = args.size !== [] ? args.size : items
      //console.log("brands",brands);
      console.log("items..........",items.length);

      const filterData = getVisibleproducts(items, types, brands, colors, sortBy, sizes);
      const total = filterData.length;
     // console.log("filter data", filterData);

      if (args.type === 'all') {
        console.log(produit.slice(args.indexFrom, args.indexFrom + args.limit))
        return {
          items: produit.slice(args.indexFrom, args.indexFrom + args.limit),
          total : produit.length,
          hasMore: produit.length > args.indexFrom + args.limit 
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
      
      const result = await produits.findOne({id:args.id}) 
      console.log(typeof result)
      console.log(result)
      return result
      
    
    
    },
    productByType: (root, args, context, info) => {
      const prods = produits.find({type : args.type})
      console.log(typeof prods)
      return prods

  },
    productByCategory: (root, args, context, info) => {
      console.log("args", args);
      return produits.find({category : args.category})
    },

    instagram: (root, args, context, info) => InstagramData.filter(e => e.type === args.type),
    blog: (root, args, context, info) => BlogData.filter(e => e.type === args.type),

    getBrands: async (root, args, context, info) => {
      const data = await produits.find( {type :args.type} );
      
      
      const brands = [...new Set(data.map(item => item.brand))]
      return { brand: brands };
    },
    getColors: (root, args, context, info) => {
      const color = []
      const data = products.filter(item => item.type === 'fashion' || item.type === args.type)
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
    getSize: (root, args, context, info) => {
      const sizes = []
      const data = products.filter(item => item.type === 'fashion' || item.type === args.type)
      data.filter((product) => {
        product.variants.filter((variant) => {
          if (variant.size) {
            const index = sizes.indexOf(variant.size)
            if (index === -1) sizes.push(variant.size)
          }
        })
      })
      return { size: sizes };
    },
    newProducts: (root, args, context, info) => {

      return products.filter(item => {

        var cond = Boolean;

        if (args.type)

          cond = (item.type === args.type && item.new === true)

        else

          cond = (item.new === true)



        return cond;

      })

    },
    getProducts: async (root, args, context, info) => {
      const indexFrom = 0;
      const produit = await produits.find();
      
      return produit.splice(indexFrom, indexFrom + args.limit);
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