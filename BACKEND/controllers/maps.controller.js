const mapsService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getAddressCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    try {
        const coordinates = await mapsService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


module.exports.getDistanceTime = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error('Validation Errors:', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const { origin, destination } = req.query;

        console.log('Fetching distance and time:', { origin, destination });

        const distanceTime = await mapsService.getDistanceTime(origin, destination);

        res.status(200).json(distanceTime);
    } catch (error) {
        console.error('Error in getDistanceTime:', error.message);
        res.status(500).json({ message: 'Unable to fetch distance and time. Please try again later.' });
    }
};




module.exports.getSuggestions = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error('Validation Errors:', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }
        

        const {origin} = req.query;
        const suggestions = await mapsService.getSuggestions(origin);
        res.status(200).json(suggestions);

}
catch (error) {
    console.error('Error in getSuggestions:', error.message);
    res.status(500).json({ message: 'Unable to fetch suggestions. Please try again later.' });
}
};