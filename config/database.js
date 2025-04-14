const { default: mongoose } = require("mongoose")
require('dotenv').config()
// const url = process.env.MONGO_URI
const DbConnection = async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log(`DB Error at:${error.message}`)
    }
}

module.exports = DbConnection