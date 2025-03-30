// const mongoose=require("mongoose");
// const FooDta=require("../Frontend/details");
// const {connectDB}=require("./configs/db");
// const {productModel}=require("./models/products.model");

// const FooDtaa=async()=>{
//     await connectDB;
//     await productModel.deleteMany();
//     await productModel.insertMany(FooDta);
//     console.log("Data send success");
// }
// FooDtaa();

const mongoose=require("mongoose");
const initData=require("../Frontend/details");
const {connectDB}=require("./configs/db");
const {productModel}=require("./models/products.model");
const MONGO_URL="mongodb+srv://pramanikrupsa:Rupsa@cluster0.4zabw.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0"
main().then(()=>{
    console.log("connection succecss to db");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB=async ()=>{
    await connectDB;
    await productModel.deleteMany();
    await productModel.insertMany(initData);
    console.log("Data send success");
}
initDB();