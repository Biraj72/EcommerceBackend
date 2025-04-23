const express= require('express');
const { addProduct, getProduct, getProductbyId, updateProduct, deleteProduct, getProductbyCategoryId } = require('../controller/ProductController');

const router= express.Router();

router.post('/productadd',addProduct);
router.get('/getproduct',getProduct);
router.get('/getproductbyid/:id',getProductbyId);
router.put('/updateproduct/:id',updateProduct);
router.delete('/deleteproduct/:id',deleteProduct);
router.get('/getproductbycategory/:id',getProductbyCategoryId);

module.exports=router;