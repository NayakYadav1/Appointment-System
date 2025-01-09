const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getDoctorInfoController, updateProfileController } = require('../controllers/doctorCtrl');

const router = express.Router()

// POST Single Doctor Info
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController)

// Post Update profile
router.post('/updateProfile', authMiddleware, updateProfileController)

module.exports = router