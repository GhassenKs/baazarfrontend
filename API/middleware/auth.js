const jwt = require('jsonwebtoken');


const auth = async(req,res,next) => {
    try {
        const token= req.headers.authorization.split(" ")[1];
        const iscustomAuth = token.length<500;
        let decodedData;
        if (token && iscustomAuth){
            decodedData=jwt.verify(token,'test');
            req.userID= decodedData?.indexOf;
        }
        next();
    } catch (error) {
        console.log(error);
    }

}
module.exports= auth