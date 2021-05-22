 const Order = require ('../../models/order')
 const List = require('../../models/list')

module.exports={
    Order: { 
        items: async (transaction) => {
        return (await transaction.populate('items').execPopulate()).items;
        },
        
        user: async (transaction) => {
            return (await transaction.populate('user').execPopulate()).user;
            },
      },
    Query :{
        async getOrders()
        {
            try{
                const orders = await Order.find({}).populate("items").populate("user").exec()
               return orders  
            }
            catch (err) {
                throw new Error(err);
            }
        },
         findOrder : async (root, args, context, info) =>
        {
          
            try{
                const order = await Order.findOne({user:args.id}).populate("items").populate("placedItems").populate("user").exec()
                
                
            
               return order  
            }
            catch (err) {
                throw new Error(err); 
            }
        }

    },
    Mutation:{
            async createOrder(_,{orderInput:{number,price,items,user}},context,info){
                console.log("working yet")

                const newOrder = new Order({
                    number,
                    price,
                    items,
                    placedItems,
                    user
                });
                const res = await newOrder.save();
                
                 return res;


            },
            createItem: async (_, { productId, orderId }) => {
                try{
                console.log(orderId)
                  const order = await Order.findOne({_id:orderId}).populate("items").populate("user").exec();
                  console.log(order)
                  await order.items.push(productId);
                  const savedorder = await order.save();
                  return savedorder;
                }catch(error){
                  console.error(error.message)
                }    
              },
              deleteItem: async (_, { productId, orderId }) => {
                try{
                console.log(orderId)
                  const order = await Order.findOne({_id:orderId});
                  console.log(order)
                  await order.items.pull(productId);
                  const savedorder = await order.save();
                  return savedorder;
                }catch(error){
                  console.error(error.message)
                }    
              },
              placeOrder: async (root, args, context, info) => {
                try{
                  const order = await Order.findOne({user:args.id}).populate("items").populate("placedItems").populate("user").exec()
                  x=order.items.length
                  var id=null
                  var ids=[]
                  for(i=0;i<x;i++){
                    id=order.items[i]._id
                    await order.placedItems.push(id);
                    ids[i]=id
                    
                  }
                  console.log(ids)
                  for(i=0;i<x;i++){
                    id=ids[i]
                    await order.items.pull(id);
                    
                    
                    
                    

                  }
                  

                  
                  const savedorder = await order.save();
                  
                  return savedorder;
              
                  
              }
              catch (err) {
                  throw new Error(err); 
              } 
              },
              placeList: async (root, args, context, info) => {
                try{
                  const order = await Order.findOne({user:args.id}).populate("items").populate("placedItems").populate("user").exec()
                  if(order){
                    var o =  new Date() 
    var json = JSON.stringify(o);
    console.log(json)
    
                     const newList = await new List({
                      
                      user:args.id,
                      status:"checkout",
                      date:json
                  });
                  const res = await newList.save();
                  listId=res._id
                  console.log(listId);
                     
                  
                  const checkList= await List.findOne({_id:listId}).populate("items").populate("user").exec()
                  console.log(checkList)

 
                  x=order.items.length
                  var id=null
                  var ids=[]
                  for(i=0;i<x;i++){
                    id=order.items[i]._id
                    await checkList.items.push(id);
                    ids[i]=id
                    
                  }
                  console.log(checkList.items)
                  for(i=0;i<x;i++){
                    id=ids[i]
                    await order.items.pull(id);
                    
                    
                    
                    

                  }
                  const savedList=checkList.save();
                   order.save();
                  return savedList
                  }
                  
                  

                  
                  
              
                  
              }
              catch (err) {
                  throw new Error(err); 
              } 
              },



    }

}