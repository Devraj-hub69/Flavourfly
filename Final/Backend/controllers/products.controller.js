const { productModel } = require("../models/products.model");


const createProduct = async (req, res)=>{
    const {name, desc, image, category, price} = req.body;

    try {
        const data = new productModel({name, desc, image,category, price});

        await data.save();

        res.status(200).send({message:"Data created successfully", data:data})
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

const getProducts =  async (req, res) => {
    try {
        const page = req.query.page || 1;
        console.log(page)
        const limit = 12;
        const skip = (page - 1) * limit;

        const products = await productModel.find().skip(skip).limit(limit);
        const total = await productModel.countDocuments();

        res.status(200).send({
            total,
            products,
            page,
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// const sendId=async(req,res)=>{
//     let id=req.params.id;
//     try{
//         let multidata=await productModel.find();
//         let singledata=multidata.find(p=>p.id === id);
//         res.status(200).send({
//             singledata
//         })
//     }catch(e){
//         res.status(500).json({message:"Not found"})
//     }
// }

module.exports = {
    getProducts, createProduct,
    
};
