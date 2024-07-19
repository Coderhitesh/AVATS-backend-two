const mongoose = require('mongoose')

const VisaApplicationSchema = new mongoose.Schema({
    application : {
        type : String,
    },
    decision : {
        type : String,
    }
})

const VisaApplication = mongoose.model('VisaApplication',VisaApplicationSchema)

module.exports = VisaApplication