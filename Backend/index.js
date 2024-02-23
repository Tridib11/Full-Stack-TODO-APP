const express=require("express")
const app=express()

app.use(express.json())

/*
body{
    //title:Stirng,
    //description:String
}
*/
app.post("/todo",function(req,res){

})
app.get("/todos",function(req,res){

})
app.put("/completed",function(req,res){

})

PORT=3000
app.listen(PORT,()=>{
    console.log(`Server started at Port ${PORT}`);
})