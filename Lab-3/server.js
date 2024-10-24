const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const cors = require('cors')

const ConnectionString = 'mongodb+srv://unnatijoshi201:6VVJCljhdwVCeeX7@unnati.3xqvo.mongodb.net/?retryWrites=true&w=majority&appName=Unnati'

const productRoutes = require('./routes/productRoutes')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//body parser  => key component in APIs nodejs 
// will help you to pass the data in body
app.use(bodyParser.json())

//routes
app.use('/api/products', productRoutes)

//es6 => promise aceepted rejected

mongoose.connect(ConnectionString)
.then(() => console.log("Mongo db is connected succesfully"))
//.catch(() => console.log("There is problem in connected with database"))
.catch( err => console.log(err))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})