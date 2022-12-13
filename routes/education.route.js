const express = require("express")
const educationRouter = express.Router()
const {EducationModel} = require("../model/education.model")


educationRouter.get("/",async(req,res)=>{
    const userID = req.body.userID
       try{
        const notes = await EducationModel.find({userID:userID})
        res.send(notes)
       }catch(err){
        console.log(err)
        res.send("somthing error in gets notes")
       }
})


educationRouter.post("/create",async(req,res)=>{
    try{
         const data = req.body
         const note = new EducationModel(data)  
          await note.save()
         res.send("note created successfully")
    }catch(err){
        console.log(err)
     res.send("somthing error in create note")
    }
})

educationRouter.put("/:noteID",async(req,res)=>{
     const noteID = req.params.noteID
     const userID = req.body.userID
     const payload = req.body
    try{
        const usernote = await EducationModel.findOne({_id:noteID})
         if(userID!==usernote.userID) {
            res.send("you are not autherized for this")
         } else{
              await EducationModel.findByIdAndUpdate({_id:noteID},payload)  
              res.send({"msg" : "Note updated successfully"})
            
         }    
    }catch(err){
     res.send("somthing error in create note")
    }
})


educationRouter.delete("/:noteID",async(req,res)=>{
    const noteID = req.params.noteID
    const userID = req.body.userID
    try{
        const usernote = await EducationModel.findOne({_id:noteID})
         if(userID!==usernote.userID) {
            res.send("you are not authenticated")
         } else{
              await EducationModel.findByIdAndDelete({_id:noteID})  
              res.send({"msg" : "Note deleted successfully"})
            
         }    
    }catch(err){
        console.log(err)
     res.send("somthing error in create note")
    }
})


module.exports={educationRouter}