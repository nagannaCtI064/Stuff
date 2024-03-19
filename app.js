//http module
//file system module
//url module
//node.js NPM
//email sent
//express.js
//upload f

    
   

const { 
    createPool
}=require('mysql')

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"mydb",
    connectionLimit:10
})


pool.query("select * from custumers where id=?",[5,6],(err,result,fields) => {
    if(err){
        return console.log(err)
    }
     return console.log(result)
})