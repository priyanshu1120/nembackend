const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
require("dotenv").config()
app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("server run ")
})

// app.use("/users",userRouter)

// app.use(authentication)
// app.use("/notes",noteRouter)



app.listen(PORT,()=>{

    console.log(`server run on http://localhost:${process.env.PORT}`) 
})
