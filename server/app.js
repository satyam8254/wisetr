const mongoose = require("mongoose");
const express = require("express");
const env = require("dotenv");
const userRoutes = require("./route/user");
const userData = require("./userdata/userinfo");
const User = require("./model/userdetail");
const cors = require("cors");

env.config();
mongoose.connect(process.env.DATABASE);
const PORT = process.env.PORT
app = express();
app.use(cors())
app.get("/push",async(req,res)=>{
    const data = await User.insertMany(userData);
    res.json(data);
})

app.use("/users",userRoutes)

app.listen(5000,console.log(`server is running at Port :-${PORT}`));