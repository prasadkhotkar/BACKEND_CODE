
const express=require('express');
const app=express();

//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

//import routes for Todo Api
const todoRoutes=require("./Routes/todos");
//mount or add or append Todo api routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>
{
    console.log(`server started successfully at ${PORT}`);
})

//connect to database
const dbConnect=require("./Config/database");
dbConnect();

//Default Route
app.get("/",(req,res)=>
{
    res.send(`<h1>This is Homepage Bro...!</h1>`);
})