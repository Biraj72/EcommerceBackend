const mongoose=require("mongoose");

mongoose.connect(process.env.DATABASE)
.then(()=>{
    //bracket ma pass garne kura, like promise le pass gareko kura
console.log("Database CONNECT vayo");
})

.catch((err)=>{
console.log(err);

});