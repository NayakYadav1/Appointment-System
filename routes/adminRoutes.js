const express = require('express')
const { getAllUsersController, getAllDoctorsController } = require('../controllers/adminCtrl')

const router = express.Router()

// Get Method || Users
router.get('/getAllUsers', authMiddleware, getAllUsersController)

// Get Method || Users
router.get('/getAllDoctorss', authMiddleware, getAllDoctorsController)

module.exports = router