const express = require('express');
const router =express();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname Should be more than 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be 6 character long')
],
    userController.registerUser
)



module.exports = router;