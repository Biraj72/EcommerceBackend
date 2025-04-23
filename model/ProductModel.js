const mongoose= require('mongoose')

const ProductSchema = new mongoose.Schema({
    product_name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String},
    quantity:{type:Number},
    image:{type:String},
    category:{
        type:mongoose.Schema.Types.ObjectId,//foregin key jasto kam garcha
        ref:"Category",//MOdel ma j name dekko tei dinu paryo eta   
        required:true,
    },
},{timestamp:true}) ;

module.exports=mongoose.model("Product",ProductSchema);