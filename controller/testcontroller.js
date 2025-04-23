exports.sample=(req,res)=>{
    res.send(`We are in Home Page ${process.env.PORT}`);
    };

    //sample ko sarta j rakhda ni huncha
exports.getTest= (req,res)=>{
        res.send(`Test Name`);
        };

