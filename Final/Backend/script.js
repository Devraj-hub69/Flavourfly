// const express=require("express");
// const app=express();
// const port=7777;
// app.use(express.json());
// const path =require("path");
// const mongoose=require("mongoose");
// const userdetails=require("../models/userRegistration.js");
// app.use(express.urlencoded({extended:true}));

// main().then(()=>{
//     console.log("connection succesfull");
// })
// .catch((err)=>console.log(err));
// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/UserRegistration");
// }


// app.get("/",(req,res)=>{
//     //res.send("server work well");
//     res.sendFile(path.join(__dirname,"UserLogin.html"));
//    //res.render("userLogin.html");
// })
// app.get("/userdata",async(req,res)=>{
//     let getdata=await userdetails.find();
//     console.log(getdata);
//     res.send("working");
// })
// app.post("/userdata",(req,res)=>{
//     let {name,email}=req.body;
//     let newdata=new userdetails({
//         name:name,
//         email:email,
//     });
//     console.log(newdata);
//     // if (!req.body.name || !req.body.email) {
//     //     return res.status(400).json({ error: "Name and Email are required" });
//     //   }
//     newdata.save().then((res)=>{
//         console.log("Registration Successfull");
//         // alert("Registration Successfull");
//     })

//     .catch((e)=>{
//         console.log(e);
//     });
//     res.redirect("/userdata");
// });

  
// app.listen(port,()=>{
//     console.log("Server running at:7777");
// })


// let login=document.getElementById("login");
// login.addEventListener("click",()=>{
//     document.querySelector(".LogIn").style.display="block";
// })

// let cross=document.getElementById("cross");
// cross.addEventListener("click",()=>{
//     document.querySelector(".LogIn").style.display="none";
// })
