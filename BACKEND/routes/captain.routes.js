const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname Should be more than 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be 6 character long'),
    body('vehicle.color').isLength({min:3}).withMessage('color Should be more than 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('plateNumber Should be more than 3 characters'),
    body('vehicle.capacity').isLength({min:1}).withMessage('capacity Should be more than 3 characters'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('vehicleType is Invalid'),

],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be 6 character long')
],
    captainController.loginCaptain
)

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports = router;