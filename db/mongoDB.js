const mongoose = require('mongoose')
require('dotenv').config()


const connectDB = async () => {

    const conn = await mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    console.log(`*** mongoDB is connected ${conn.connection.host} ***`)
}


module.exports = connectDB