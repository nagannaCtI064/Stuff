const express=require('express')
const app=express()
app.get('/',function(req,resp){

  resp.sendFile(__dirname+'/app.html')

})
app.get('/reg.html',function(req,resp){

  resp.sendFile(__dirname+'/reg.html')

})


app.listen(5000)