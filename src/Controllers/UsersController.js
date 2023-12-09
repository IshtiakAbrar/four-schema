
const UserModel=require('../Models/UserModel');
const CartItemModel=require('../Models/CartItemModel');
const ProductModel=require('../Models/ProductModel');
const OrderModel=require('../Models/OrderModel');




exports.registration=async (req,res)=>{
    let reqBody= req.body;
    try {
        let result = await UserModel.create(reqBody);
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}


exports.createProduct=async (req,res)=>{
    let reqBody= req.body;
    try {
        let result = await ProductModel.create(reqBody);
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}

exports.cart=async (req,res)=>{
    let reqBody= req.body;
    try {
        let result = await CartItemModel.create(reqBody);
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}

exports.createOrder=async (req,res)=>{
    let reqBody= req.body;
    try {
        let result = await OrderModel.create(reqBody);
        res.status(200).json({status: "Success", data: result});
    }
    catch(e){
        res.status(200).json({status: "Fail", data: e.toString()});
    }

}

