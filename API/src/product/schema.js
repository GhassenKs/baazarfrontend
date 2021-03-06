const typeDefs = `
    type Product {
        _id:ID!
        id: Int!
        title: String
        description: String
        type: _CategoryType
        brand: String
        collection: [String]
        category: String
        price: Int
        sale: Boolean
        discount: String
        picture:Int
        stock: Int
        new: Boolean
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
      metro,
      securitycameras,
      Caccessories,
      Headphonesnearphones,
      speakers,
      radios,
      desktopC,
      laptops,
      portfolio,
      marketplace,
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
      videoslider,
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
      zip:String
      city:String
      token:String!
    }
    type Admin{
      id:ID!
      firstName:String!
      lastName:String!
      email:String!
      password:String!
      role:String!
      token:String!
    }
    ##-----------------adding orders typeDefinitions 
    type Order{
      id:ID!
      number: Int 
      price:String
      items:[Product]
      placedItems:[Product]
      user:User

    }
    input OrderInput{
      number: Int 
      items: [ID]
      price:String
      user:ID!
    }



    ##------------------end of edits

    ##---------- List 

    type List{
      id:ID!
      number: Int 
      price:String
      items:[Product]
      user:User
      status:String
      date:String

    }
    input ListInput{
      number: Int 
      items: [ID]
      price:String
      user:String!
      status:String
    }




    ##--------end
    input RegisterInput{
      firstName:String!
      lastName:String!
      email:String!
      password:String!
      phone:String
      address:String
      zip:String
      city:String
    }
    input RegisterAdminInput{
      firstName:String!
      lastName:String!
      email:String!
      password:String!
      role:String!
      
    }
    
     type Query {
        product(id: Int!): Product
        products(indexFrom:Int , limit:Int ,type:_CategoryType ,text:String ,brand: [String!],size:[String!] , color:String ,sortBy:_SortBy ,priceMin:Int ,priceMax:Int ): ProductResponse
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
      
        getOrders:[Order]
        productSearch(indexFrom:Int ,text:String,priceMax:Int,priceMin:Int,limit:Int,sortBy:_SortBy): ProductResponse
        findOrder(id:String):Order

        getList:[List]
        findList(id:String):List

        
        
      }
  
   
    type Mutation {
      register(registerInput:RegisterInput):User!
      registerAdmin(registerAdminInput:RegisterAdminInput):Admin!
      login(email:String!,password:String!): User!
      updateUser(firstName:String,lastName:String,email:String,phone:String,address:String,city:String,zip:String):User!
      
      createOrder(orderInput:OrderInput):Order!
      deleteOrder(orderID:ID!):Order
      createItem(productId: String, orderId: String): Order
      deleteItem(productId: String, orderId: String): Order

      
      placeOrder(id:String):Order
      placeList(id:String):List

      createList(ListInput:ListInput):List
      createListItem(productId: String, listId: String): List
      deleteListItem(productId: String, listId: String): List
      
    }
`;



module.exports = typeDefs