//import the model
const Todo=require("../Models/Todo").default;

//define route handeler
exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from request body
        const{title,description}=req.body;
        //new todo obj created and insert in db
        const response=await Todo.create({title,description});
        //send a json response with sucess flag

        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created Sucessfully'
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}