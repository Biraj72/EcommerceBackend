const Product=require("../model/ProductModel");
const Category=require("../model/CategoryModel");

exports.addProduct=async(req,res)=>{
    try{ 
        let product = new Product({
            product_name:req.body.product_name,//postman ko body ma ni product_name
            price:req.body.price,
            description:req.body.description,
            quantity:req.body.quantity,
            image:req.body.image,
            category:req.body.category,
        });
        product = await product.save();
        if(!product)
        {
            return res.status(400).json({message:"Invalid product data"});
        }
        return res.send(product);
    }catch(err){
        return res.status(400).json({error:err.message,detail:"Product Not Added"})

    }
}

exports.getProduct=async(req,res)=>{
    try{
          let product= await Product.find().populate("category","category_name");//select * from category
                if(!product)
                { 
                    res.status(404).json({error:"No Product Found"});
                }
                return res.send(product);
                // return res.status(200).json({})
                //postman ma kasari data ako cha hera, res.data.product
    }catch(err){
        return res.status(400).json({error:err.message,detail:"Product Not Found"});
    }
}

exports.getProductbyId=async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            res.status(404).json({error:"No product with such Id"});
        }
        return res.send(product);
    }catch(err){
        return res.status(400).json({error:err.message,detail:"Invalid Request"});
    }
}

exports.updateProduct= async(req,res)=>{       //unique id to identify category, change garne body ma
    try{ 
        let product=await Product.findByIdAndUpdate(req.params.id,{product_name:req.body.product_name},{new:true}
    );
    if(!product){
        res.status(404).json({error:"Product not found"});
    }
    return res.status(200).json({product,success:"Product Updated"})
    }catch(err){
        return res.status(400).json({error:err.message,detail:"Invalid name"});
    }
};

exports.deleteProduct = async(req,res) =>{
    try{let product=await Product.findByIdAndDelete(req.params.id);
            if(!product){
                res.status(404).json({error:"Product not found"});
            }
            return res.status(200).json({product,success:"Product Deleted"})
        }catch(err){
            return res.status(400).json({error:err.message,detail:"Invalid Id"});
        }
}

exports.getProductbyCategoryId=async(req,res)=>{
try{
    let category= await Category.findById(req.params.id);
    if(!category)
    {
        return res.status(404).json({message:"Category not found"});
    
    }
    let product = await Product.find({category:req.params.id}).populate("category","category_name");
    if(!product)
        {
            return res.status(404).json({message:"Product not found"});
        
        }
        res.send(product);
}
catch(err)
{
return res.staus(400).json({err:err.message,detail:"Invalid Error"})
}
}