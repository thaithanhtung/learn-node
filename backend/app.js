const express = require('express')
const bodyParser = require('body-parser')

require('dotenv/config')

const app = express()

app.use(bodyParser.json())

const postsRouter = require('./routes/post')
const userRouter = require('./routes/user')

// route

app.use('/posts', postsRouter)
app.use('/users', userRouter)

// app.use('/posts', () => {
//   console.log('this is middleware running')
// }

// connected db

// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }).then(()=> console.log("thành công")).catch((error)=>console.log("error",error))

// start
app.listen(3333)
