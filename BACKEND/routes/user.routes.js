const express = require('express');
const router =express();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname Should be more than 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be 6 character long')
],
    userController.registerUser
)

// creating of login route
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be 6 character long')
],
    userController.loginUser
)

//creating of profile route

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

// creting logout route
router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports = router;