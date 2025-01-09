const doctorModel = require('../models/doctorModel')

const getDoctorInfoController = async(req, res) => {
    try{
        const doctor = await doctorModel.findOne({ userId: req.body.userId})
        res.status(200).send({
            success: true,
            message: 'Doctor data fetch successfully',
            data: doctor
        })
    } catch(error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: 'Error in Fetching Doctor Details'
        })
    }
}

// update doctor profile
const updateProfileController = async(req, res) => {
    try{
        const doctor = await doctorModel.findOneAndDelete({ userId: req.body.userId}, req.body)
        res.status(201).send({
            success: true,
            message: 'Doctor Profile Updated',
            data: doctor
        })
    } catch(error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error with doctor profile update',
            error
        })
    }
}

module.exports = { getDoctorInfoController, updateProfileController }