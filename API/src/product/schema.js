const typeDefs = `
    type Product {
        id: Int!
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
  
 
      type Images {
        image_id: Int
        id: String
        alt: String
        src: String
    }
    type Variants {
      variant_id:String
      id:String
      sku:String
      size:String
      color:String
      image_id:Int
     }
     type Currency {
      currency : String
      name : String
      symbol : String
      value : Int
    }
    
    type Instagram {
      type:String
      img:String
    }
    type Brand {
      brand:[String]
    }
    type Color {
      colors:[String]
    }
    type Size {
      size : [String]
    }
    enum _SortBy {
      HighToLow,
      LowToHigh,
      Newest,
      AscOrder,
      DescOrder,
    }
    enum _CategoryType {
      electronics,
      Dresses,
      Skirts,
      Ftshirts,
      Fjackets,
      Fjeans,
      Fsports,
      Fshoes,
      Fnecklaces,
      Fbraceletsrings,
      Fcapshats,
      Fpursesbags,
      Mshirts,
      Msweater,
      Mjeans,
      Mjackets,
      Mblazers,
      Msports,
      Mshoes,
      Mnecklaces,
      Mbraceletsrings,
      Mcapshats,
      Mbags,
      fashion,
      Mfragrances,
      Ffragrances,
      Makeup,
      Skincare,
      Haircare,
      chairs,
      Tables,
      beds,
      desks,
      mattresses,
      dressers,
      televisions,
      TVreceivers,
      projectors,
      Sspeakers,
      microwaves,
      lights,
      frigs,
      digitalcameras,
      securitycameras,
      Caccessories,
      Headphonesnearphones,
      speakers,
      radios,
      desktopC,
      laptops,
      fruits,
      vegetables,
      domesticC,
      beverages,   
      treats,
      phealthsupplies,
      pfurniture,
      ptoys,
      pgrooming,
      bsupplies,
      electrical,
      bulbs,
      wallsupplies,
      plumbing,
      proteinbars,
      wsupplies,
      multivitamins,
      immunesupport,
      all
      
    }
    type ProductResponse {
      items:[Product],
      total:Int,
      hasMore:Boolean
    }
    type Blog {
      type:String,
      img:String,
      link:String,
      title:String,
      desc:String,
      date:String,
      shortDesc:String,
      longDesc:String
    }
    type User{
      id:ID!
      firstName:String!
      lastName:String!
      email:String!
      password:String!
      phone:String
      address:String
      zip:Int
      city:String
      token:String!
    }
    input RegisterInput{
      firstName:String!
      lastName:String!
      email:String!
      password:String!
      phone:String
      address:String
      zip:Int
      city:String
    }
    
     type Query {
        product(id: Int!): Product
        products(indexFrom:Int , limit:Int ,type:_CategoryType ,text :String ,brand: [String!],size:[String!] , color:String ,sortBy:_SortBy ,priceMin:Int ,priceMax:Int ): ProductResponse
        productByType(type:String):[Product]
        productByCategory(category:String):[Product]
        instagram(type:String):[Instagram]
        blog(type:String):[Blog]
        getBrands(type:String):Brand!
        getColors(type:String):Color!
        getSize(type:String):Size!
        newProducts(type:String):[Product]
        getProducts(limit:Int):[Product]
        getCurrency:[Currency]
        getUsers: [User]
        produits:[Product] ! 
        getProduits(id:Int!):Product
        allProducts:[Produit]
        
      }
  
    # type Mutation {
    #     createUser(name: String, email: String, password: String): User
    #     createRecipe(
    #       userId: Int
    #       title: String
    #       ingredients: String
    #       direction: String
    #     ): Recipe
    # }
    type Mutation {
      register(registerInput:RegisterInput):User!
      login(email:String!,password:String!): User!
      createproduit(title:String,price:String):Produit!
    }
`;



module.exports = typeDefs