const express=require('express')
const app=express()
app.get('/',function(req,res){

res.send("HEllo nandyal ")
})
app.get('/benny',function(req,res){
    const id=req.query.id
    res.send("Welcome Benny!....."+id)
})
app.get('/benny/:id',function(req,res){
  const id=req.params.id
  res.send("Hello benny !"+ id)

})
app.listen(8081,function(req,res){
    console.log("server is Running.....")
})