require('./db')
const express = require ('express');
const morgan = require('morgan');
require('dotenv').config()
const postRouter = require('./routers/post')

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/post", postRouter)

const PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log('Port is listening ' + PORT)
})