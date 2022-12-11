const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
const PORT  = require("dotenv").config().parsed.PORT
const {connect} = require("./config/db")
const {userRouter} = require("./routes/user.route")
const {noteRouter} =  require("./routes/note.route")
const {authentication} = require("./middleware/authentication")

app.use("/users",userRouter)



app.get("/",(req,res)=>{
    res.send("server run ")
})

app.use(authentication)
app.use("/notes",noteRouter)



app.listen(PORT,async()=>{
    try{
        await connect
    }catch(err){
        console.log("somthing error in connection")
        console.log(err)
    }
    console.log(`server run on http://localhost:${PORT}`) 
})
