const express= require('express');
const { addCategory, getcategory, getcategoryById, updateCategory, deleteCategory } = require('../controller/CategoryController');

const router= express.Router();

router.post('/categoryadd',addCategory);
router.get("/",getcategory);
router.get("/:id",getcategoryById)
//router.get("/:id/:country",getcategoryById)
//route ko ma id nalekjhera j rakhe ni huncha
router.put("/updateCategory/:id",updateCategory);
router.delete("/deleteCategory/:id",deleteCategory);
module.exports=router;

//find garda multiple array ma aucha
//findone single garda jsno ma