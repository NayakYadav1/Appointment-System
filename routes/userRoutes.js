const express = require('express');
const { loginController, registerController, authController, applyDoctorController, getAllNotificationController, deleteAllNotificationController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

// router object
const router = express.Router()

// routes
// login || post
router.post('/login', loginController);

// register || post
router.post('/register', registerController);

// Auth || post
router.post('/getUserData', authMiddleware, authController)

// Apply Doctor || post
router.post('/apply-doctor', authMiddleware, applyDoctorController)

// Notification Doctor || post
router.post('/get-all-notification', authMiddleware, getAllNotificationController)

// Notification Doctor || post
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController)

module.exports = router