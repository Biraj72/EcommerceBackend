console.log("Hello World Im here to COME fast and forward");

const express= require('express');
const testroute = require('./routes/TestRoutes.js')
const DoNotTestRoutes= require('./routes/DontTestRoutes.js');
const categoryroute =require('./routes/CategoryRoute.js');
const productroute= require('./routes/ProductRoutes.js')
const cors=require("cors");
const app=express();
require("dotenv").config();
app.use(cors());
port=process.env.PORT || 8080;
app.use(express.json());
require("./database/connection.js")


app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
});

app.use(testroute);
app.use(DoNotTestRoutes);
app.use("/category",categoryroute);
app.use("/product",productroute);
//category is parent for productroute, get category

//populate