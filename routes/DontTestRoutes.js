const express=require('express');
const { Biraj } = require('../controller/birajcontroller');


const router=express();
router.get("/biraj",Biraj);

module.exports=router;