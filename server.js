const express = require('express')
const app = express()

const PORT = process.env.PORT|| 2525;
const {Item} = require('./db/model')

//Body parser are included in express
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(express.static(__dirname +'/public_static'))

app.get('/hello',(req,res)=> res.send('Hello There'))

app.get('/items',(req,res)=>{
    Item.findAll()
        .then((result)=> res.send(result))
        .catch((err)=>console.error(err))
})

app.post('/items',(req,res)=>{
    Item.create(
        {
            stuff: req.body.stuff
        }
    ).then(()=> res.redirect('/items'))
        .catch((err)=> console.error(err))
})


app.listen(PORT,()=>{
    console.log("server has started")
})