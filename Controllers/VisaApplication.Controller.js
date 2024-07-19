const VisaApplication = require('../Models/VisaApplication.Model')

exports.createVisaApplication = async (req, res) => {
    try {
        const { application, decision } = req.body
        const emptyField = []
        if (!application) {
            emptyField.push('application is required')
        }
        if (!decision) {
            emptyField.push('decision is required')
        }
        if (emptyField.length > 0) {
            return res.status(400).json({ message: emptyField.join(', ') })
        }
        const visaApplication = new VisaApplication({ application, decision })
        await visaApplication.save()
        return res.status(201).json({ 
            success:true,
            message: 'Visa Application Created Successfully',
            data: visaApplication
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

exports.getAllVisaApplication = async(req,res) => {
    try {
        const AllVisaApplication = await VisaApplication.find()
        if(!AllVisaApplication){
            return res.status(400).json({
                success: false,
                message: 'No Visa Application Found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Visa Application Founded',
            data: AllVisaApplication
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

exports.deleteSingleVisaApplication = async(req,res) => {
    try {
        const {_id} = req.params;
        const visaApplication = await VisaApplication.findByIdAndDelete(_id)
        if(!visaApplication){
            return res.status(400).json({
                success: false,
                message: 'No Visa Application Found'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Visa Application Deleted Successfully',
            data: visaApplication
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

exports.updateVisaApplication = async (req, res) => {
    try {
        const { _id } = req.params
        const { application, decision } = req.body

        // Check for required fields
        const emptyField = []
        if (!application) {
            emptyField.push('application is required')
        }
        if (!decision) {
            emptyField.push('decision is required')
        }
        if (emptyField.length > 0) {
            return res.status(400).json({ message: emptyField.join(', ') })
        }

        // Find and update the Visa Application
        const visaApplication = await VisaApplication.findByIdAndUpdate(
            _id,
            { application, decision },
            { new: true, runValidators: true }
        )

        // Check if the Visa Application was found and updated
        if (!visaApplication) {
            return res.status(400).json({
                success: false,
                message: 'No Visa Application Found'
            })
        }

        // Return success response
        return res.status(200).json({
            success: true,
            message: 'Visa Application Updated Successfully',
            data: visaApplication
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}
