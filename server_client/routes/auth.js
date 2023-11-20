const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const adminController = require('../controllers/admin')

router.route('/register').post(authController.register)
router.route('/login').post(authController.login)
// router.route('/create').post(adminController.createAdmin)
router.route('/register/buyer').post(authController.registerBuyer)
router.route('/login/buyer').post(authController.loginBuyer)

module.exports = router
