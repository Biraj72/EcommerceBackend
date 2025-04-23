const Category=require('../model/CategoryModel');

exports.addCategory= async(req,res)=>{
    try{
        let category= await Category.findOne({category_name:req.body.category_name});
    if(!category)
    {
        let categoryadd= new Category({
            category_name: req.body.category_name
    });
    categoryadd = await categoryadd.save();
    return res.send(categoryadd);
    }
else
res.status(201).json({error:"Category already exists", name:"heloo"});
    } catch(err){
        return res.status(400).json({error:err.message,detail:"Category not added"});
    }
    
};

//sab lai try catch hal
//like a method

exports.getcategory = async(req,res)=>{
    //varaivle = model
    try{
        let category= await Category.find();//select * from category
        if(!category)
        {
            res.status(404).json({error:"No Category Found"});
        }
        return res.send(category);
    }catch(err){
        return res.status(400).json({error:err.message,detail:"Invalid Parameter"});
    }
    
}
//2 ta kura json ma dekhauna paryo like status and error vane use .json {}
exports.getcategoryById= async (req,res)=>{
    try{
        let category= await Category.findById(req.params.id);
    if(!category){
    res.status(404).json({error:" No Category Found"})    
    }
    return res.send(category);//onyl shows category
    //res.send(country,category) garyo vane duita display
    }
    catch(err){
        return res.status(400).json({error:err.message,detail:"Invalid Id"});
    }
    
}

exports.updateCategory= async(req,res)=>{       //unique id to identify category, change garne body ma
    try{ let category=await Category.findByIdAndUpdate(req.params.id,{category_name:req.body.category_name},{new:true}
    );
    if(!category){
        res.status(404).json({error:"Category not found"});
    }
    return res.status(200).json({category,success:"Category Updated"})
    }catch(err){
        return res.status(400).json({error:err.message,detail:"Invalid Id"});
    }
   
};

exports.deleteCategory= async(req,res)=>{     
    //req le limncha, res le repsone dincha  //unique id to identify category, change garne body ma
    try{
        let category=await Category.findByIdAndDelete(req.params.id);
        if(!category){
            res.status(404).json({error:"Category not found"});
        }
        return res.status(200).json({category,success:"Category Deleted"})
    }catch(err){
        return res.status(400).json({error:err.message,detail:"Invalid Id"});
    }
   

};
