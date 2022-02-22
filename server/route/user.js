const express = require("express");
const router = express.Router();
const User = require("../model/userdetail");

router.get("/", async(req,res)=>{
    try {
        const user = await User.find();
        res.json(user)
    } 
    catch (error) {
        res.status(200).json({
            status: "failed",
            error: error.message
        })
        
    }
})


router.put("/:id",async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate({_id: req.params.id},req.body,{new:true})
        res.json(user)
    } 
    catch (error) {
        res.status(200).json({
            status:"error",
            message:error.message 
        })
        
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const user = await User.deleteOne({_id: req.params.id})
        res.json(user)
    } 
    catch (error) {
        res.status(200).json({
            status:"user deleted",
            message:error.message
        })
    }
})



module.exports = router