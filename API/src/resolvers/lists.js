const List = require ('../../models/list')


module.exports={
    
    Query :{
        
        async getList()
        {
            console.log("working")
            try{
                const lists= await List.find().populate("items").populate("user").exec()
               return lists  
            }
            catch (err) {
                console.log("there is an error")
                throw new Error(err);
            }
        },
        findList : async (root, args, context, info) =>
        {
          
            try{
                const list = await List.findOne({_id:args.id}).populate("items").populate("user").exec()
                
                
            
               return list  
            }
            catch (err) {
                throw new Error(err); 
            }
        }


        

    },
     
    Mutation:{
            async createList(_,{ListInput:{number,price,items,user,status}},context,info){
                console.log("workings")

                const newList = new List({
                    number,
                    price,
                    items,
                    status,
                    user
                });
                const res = await newList.save();
                
                 return res;


            },
            createListItem: async (_, { productId, listId }) => {
                try{
                console.log(listId)
                  const list = await List.findOne({_id:listId}).populate("items").populate("user").exec();
                  console.log(list)
                  await list.items.push(productId);
                  const savedlist = await list.save();
                  return savedlist;
                }catch(error){
                  console.error(error.message)
                }    
              },
              deleteListItem: async (_, { productId, listId }) => {
                try{
                console.log(listId)
                  const list = await List.findOne({_id:listId});
                  console.log(list)
                  await list.items.pull(productId);
                  const savedlist = await list.save();
                  return savedlist;
                }catch(error){
                  console.error(error.message)
                }    
              },
              



    }

}