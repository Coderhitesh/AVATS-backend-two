const mongoose = require('mongoose')

const VisaDetailSchema = new mongoose.Schema({
    visaType : {
        type : String,
    },
    applicationReceived : {
        type : String,
    },
    AppealsReceived : {
        type : String,
    }
})

const VisaDetail = mongoose.model('VisaDetail',VisaDetailSchema)

module.exports = VisaDetail