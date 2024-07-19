const VisaDetail = require('../Models/VisaDetail.Model')

exports.CreateVisaDetail = async (req, res) => {
    try {
        const { visaType, applicationReceived, AppealsReceived } = req.body
        const emptyField = []
        if (!visaType) {
            emptyField.push('Fill the Visa Type')
        }
        if (!applicationReceived) {
            emptyField.push('Fill the Application Received')
        }
        if (!AppealsReceived) {
            emptyField.push('Fill the Appeals Received')
        }
        if (emptyField.length > 0) {
            return res.status(400).json({ message: emptyField.join(', ') })
        }
        const visaDetail = await VisaDetail.create({
            visaType,
            applicationReceived,
            AppealsReceived
        })
        return res.status(200).json({
            success : true,
            message : 'Visa Detail Created Successfully',
            data : visaDetail
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        })
    }
}

exports.GetAllVisaDetail = async(req,res) => {
    try {
        const allVisaData = await VisaDetail.find()
        if(!allVisaData){
            return res.status(404).json({
                status: false,
                message: 'No Data Found'
            })
        }
        return res.status(200).json({
            status: true,
            message: 'Visa Detail Data Found Successfully',
            data: allVisaData
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        })
    }
}

exports.deleteSingleVisaDetail = async(req,res) => {
    try {
        const {_id} = req.params
        const singleVisaDetail = await VisaDetail.findByIdAndDelete(_id)
        if(!singleVisaDetail){
            return res.status(404).json({
                status: false,
                message: 'No Data Found'
            })
        }
        return res.status(200).json({
            status: true,
            message: 'Visa Detail Deleted Successfully',
            data: singleVisaDetail
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        })
    }
}