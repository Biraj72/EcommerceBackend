const mongoose=require('mongoose');
//Create table tablename
const CategorySchema=new mongoose.Schema({
    category_name:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});
module.exports=mongoose.model("Category",CategorySchema);