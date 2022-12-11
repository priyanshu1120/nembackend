const express = require("express")
const app = express()
app.use(express.json())
const {connect} = require("./config/db")
const cors = require("cors")
const {userRouter} = require("./routes/user.route")
require("dotenv").config()
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("server run ")
})

app.use("/users",userRouter)

// app.use(authentication)
// app.use("/notes",noteRouter)



app.listen(process.env.PORT,async ()=>{
  try{
       await connect
       console.log(`server run on http://localhost:${process.env.PORT}`) 
  }catch(err){
     console.log(err)
  }
    
})
