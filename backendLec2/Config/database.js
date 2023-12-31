const mongoose=require('mongoose');

//step1 install dotenv library to load the env data into process object
//then add following command into your code after installing dotenv (npm i dotenv)
require("dotenv").config();

const dbConnect=( ()=>
{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Database connection is sucessful")
    })
    .catch((error)=>{
        console.log("Issue in Database connection");
        console.log(error.message);
        process.exit(1);
    })
})

module.exports=dbConnect;