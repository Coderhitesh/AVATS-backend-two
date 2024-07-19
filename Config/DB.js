const mongoose = require('mongoose')

const ConnectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_LINK)
        console.log('DataBase is Connected successfully')
    } catch (error) {
        console.log(error)

    }
}

module.exports = ConnectDB