const { url } = require('inspector');
const mongoose = require('mongoose');
const { type } = require('os');
const { URL } = require('url');

const productSchema = mongoose.Schema({
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    },
    desc:{
        type:String,
    },
    price:{
        type:Number
    },
    ratings:{
        type:Number
    },
    ingredients:{
        type:Array
    },
    recommended_for:{
        type:Array
    },
    image_url:{
        type:String
    }
});

const productModel = mongoose.model("product", productSchema);

module.exports={
    productModel
}

