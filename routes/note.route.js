const express = require("express")
const noteRouter = express.Router()
const {NotesModel} = require("../model/note.model")


noteRouter.get("/",async(req,res)=>{
       try{
        const notes = await NotesModel.find()
        res.send(notes)
       }catch(err){
        console.log(err)
        res.send("somthing error in gets notes")
       }
})


noteRouter.post("/create",async(req,res)=>{
    try{
         const data = req.body
         const note = new NotesModel(data)  
          await note.save()
         res.send("note created successfully")
    }catch(err){
        console.log(err)
     res.send("somthing error in create note")
    }
})

noteRouter.put("/:noteID",async(req,res)=>{
     const noteID = req.params.noteID
     const userID = req.body.userID
     const payload = req.body
    try{
        const usernote = await NotesModel.findOne({_id:noteID})
         if(userID!==usernote.userID) {
            res.send("you are not autherized for this")
         } else{
              await NotesModel.findByIdAndUpdate({_id:noteID},payload)  
              res.send({"msg" : "Note updated successfully"})
            
         }    
    }catch(err){
     res.send("somthing error in create note")
    }
})


noteRouter.delete("/:noteID",async(req,res)=>{
    const noteID = req.params.noteID
    const userID = req.body.userID
    try{
        const usernote = await NotesModel.findOne({_id:noteID})
         if(userID!==usernote.userID) {
            res.send("you are not authenticated")
         } else{
              await NotesModel.findByIdAndDelete({_id:noteID})  
              res.send({"msg" : "Note deleted successfully"})
            
         }    
    }catch(err){
        console.log(err)
     res.send("somthing error in create note")
    }
})


module.exports={noteRouter}