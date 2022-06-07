const express = require('express')
const bodyParser = require('body-parser')

require('dotenv/config')

const app = express()

app.use(bodyParser.json())

const postsRouter = require('./routes/post')

// route

app.use('/posts', postsRouter)

// app.use('/posts', () => {
//   console.log('this is middleware running')
// })

app.get('/tung-dep-trai', (req, res) => {
  res.send('run here')
})

// connected db

// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('connected db')
})

// const client = new MongoClient(process.env.DB_CONNECTION, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// })
// client.connect((err) => {
//   //   const collection = client.db("test").collection("devices");
//   //   // perform actions on the collection object
//   //   client.close();
//   console.log('test connected ')
// })

// start
app.listen(3333)
