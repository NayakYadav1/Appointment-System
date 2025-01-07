const express = require('express')
const { getAllUsersController, getAllDoctorsController } = require('../controllers/adminCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

// Get Method || Users
router.get('/getAllUsers', authMiddleware, getAllUsersController)

// Get Method || Users
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)

module.exports = router