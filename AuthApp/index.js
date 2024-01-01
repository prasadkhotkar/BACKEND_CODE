const express=require("express");
const app=express();

require("dotenv").config();

const PORT=process.env.PORT ||4000;

app.use(express.json());

require("./config/database").connect();

//import route and mount it
const user=require("./routes/user");

//server activation

app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`);
})