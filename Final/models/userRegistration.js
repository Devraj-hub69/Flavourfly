const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:false,
    },
});
const user=mongoose.model("user",userSchema);
module.exports=user;