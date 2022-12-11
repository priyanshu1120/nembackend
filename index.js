const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const PORT = process.env.PORT 
app.use(cors({
    origin :"*"
}))



app.get("/",(req,res)=>{
    res.send("server run")
})
app.listen(PORT,()=>{
      console.log("server run on http://localhost:7500")
})

