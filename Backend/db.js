/*
Todo{
    title:String,
    description:String,
    completed:boolean
}
*/
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://tridib:admin@cluster0.95d0jvi.mongodb.net/todo-app")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema)
module.exports={
    todo
}