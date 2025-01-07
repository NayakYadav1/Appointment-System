const express = require('express')
const { getAllUsersController, getAllDoctorsController, changeAccountStatusController } = require('../controllers/adminCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

// Get Method || Users
router.get('/getAllUsers', authMiddleware, getAllUsersController)

// Get Method || Doctor
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)

// POST Account Status
router.post('/changeAccountStatus', authMiddleware, changeAccountStatusController)

module.exports = router