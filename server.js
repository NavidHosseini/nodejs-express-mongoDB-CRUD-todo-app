const express = require('express')

const app = express()

//body parser
app.use(express.json())

//database
const connectDb = require('./db/mongoDB')
connectDb()

//import Routes
const todos = require('./routes/todos')


const PORT = process.env.PORT || 5000

//Root
app.get('/', (req, res) => res.send('Hello World!'))

//Routes
app.use('/todos', todos)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})