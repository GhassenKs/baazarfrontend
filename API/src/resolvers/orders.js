 const Order = require ('../../models/order')


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
                const orders = await Order.find().populate("items").populate("user").exec()
               return orders  
            }
            catch (err) {
                throw new Error(err);
            }
        },
         findOrder : async (root, args, context, info) =>
        {
          
            try{
                const order = await Order.findOne({user:args.id}).populate("items").populate("user").exec()
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



    }

}