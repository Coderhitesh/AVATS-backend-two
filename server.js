const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config()
const ConnectDB = require('./Config/DB')
const router = require('./Routers/Router')


const PORT = process.env.PORT

// Middleware
app.use(cors());
app.use(express.json()); 

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/api/v8',router)

app.listen(9123,()=>{
    console.log(`Server is running on port ${PORT}`)
})

ConnectDB();