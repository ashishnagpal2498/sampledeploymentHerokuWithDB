const express = require('express')
const app = express()

const PORT = process.env.PORT|| 2525;

app.use(express.static(__dirname +'/public_static'))

app.listen(PORT,()=>{
    console.log("server has started")
})