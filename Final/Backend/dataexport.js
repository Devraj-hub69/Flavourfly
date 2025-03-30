const mongoose=require("mongoose");
const FooDta=require("../Frontend/details");
const {connectDB}=require("./configs/db");
const {productModel}=require("./models/products.model");

const FooDtaa=async()=>{
    await connectDB;
    await productModel.deleteMany();
    await productModel.insertMany(FooDta);
    console.log("Data send success");
}
FooDtaa();