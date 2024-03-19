const express=require('express')
const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("<h1>hello benny</h1>")
})
const products=[

    {
        id:1,
        name:"i phone"
    },
    {
        id:2,
        name:"mi"
    },
    {
        id:3,
        name:"techno"
    }
    
]
app.get('/products',(req,res)=>{
    res.json(products)
})
app.get('/products/:id',(req,res)=>{
    const newdata=products.filter(item=>item.id==req.params.id)
    return res.json(newdata)
})
app.post('/addproducts',(req,res)=>{
    const {id,name}=req.body;
    console.log(id,name)
    return res.send("Data stored!!")
})
app.listen(8081,console.log("server is running......"))