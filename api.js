const express=require('express')
const app=express()
app.get('/',(req,resp)=>{
    resp.send({name:'raju'})
})

app.listen(5000)