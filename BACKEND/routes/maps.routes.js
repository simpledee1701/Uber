const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapsController = require('../controllers/maps.controller');
const { query } = require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({min:3}).withMessage('address should be more than 3 characters'),
    authMiddleware.authUser,
    mapsController.getAddressCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({min:3}).withMessage('origin should be more than 3 characters'),
    query('destination').isString().isLength({min:3}).withMessage('destination should be more than 3 characters'),
    authMiddleware.authUser,
    mapsController.getDistanceTime
)

router.get('/get-suggestions',
    query('origin').isString().isLength({min:0}).withMessage('origin should be more than 0 characters'),
    authMiddleware.authUser,
    mapsController.getSuggestions
)

module.exports = router;