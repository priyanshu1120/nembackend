const jwt = require("jsonwebtoken")
const key = require('dotenv').config().parsed.key

const authentication = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1]
    if(token){
          var decoded = jwt.verify(token,`${key}`)
          if(decoded){
               const userID = decoded.userID
               req.body.userID = userID
               next()
          }else{
            res.send(" you are not authenticated login please...")
          }
    }else{
        res.send(" you are not authenticated  login please...")
    }

}

module.exports = {authentication}