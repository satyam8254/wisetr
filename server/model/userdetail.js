const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    }
})


const user = mongoose.model("userdetail",UserSchema);
module.exports = user;