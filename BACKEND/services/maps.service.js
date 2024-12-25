const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apikey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apikey) {
        throw new Error('Google Maps API key is missing');
    }

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apikey}`;
    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error(`Google Maps API error: ${response.data.status}`);
        }
    } catch (error) {
        throw new Error(error.response?.data?.error_message || 'Unable to fetch coordinates');
    }
};



module.exports.getDistanceTime = async (origin, destination) => {
    const apikey = process.env.GOOGLE_MAPS_API_KEY;

    if (!origin || !destination) {
        throw new Error('Origin and destination are required.');
    }

    if (!apikey) {
        throw new Error('Google Maps API key is missing.');
    }

    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&key=${apikey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK' && response.data.routes.length > 0) {
            const leg = response.data.routes[0].legs[0];
            return {
                distance: {
                    text: leg.distance.text, // e.g., "15.3 km"
                    value: leg.distance.value, // e.g., 15300 (in meters)
                },
                duration: {
                    text: leg.duration.text, // e.g., "18 mins"
                    value: leg.duration.value, // e.g., 1080 (in seconds)
                },
            };
        } else if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('No routes found between the specified locations.');
        } else {
            throw new Error(`Google Maps API error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching distance and time from API:', error.response?.data || error.message);
        throw new Error('Unable to fetch distance and time');
    }
};



module.exports.getSuggestions = async (origin) => {
    if (!origin) {
        throw new Error('Origin is required.');
    }
    const apikey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(origin)}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK' && response.data.predictions.length > 0) {
            return response.data.predictions.map(prediction => prediction.description).filter(value => value);

        }
        else if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('No predictions found for the specified origin.');
        }
        else {
            throw new Error(`Google Maps API error: ${response.data.status}`);
        }

    } catch (error) {
        console.error('Error fetching suggestions from API:', error.response?.data || error.message);
        throw new Error('Unable to fetch suggestions');
    }
};