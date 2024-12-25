const rideModel = require('../models/ride.model');
const { validationResult } = require('express-validator');
const mapsService = require('../services/maps.service');
const crypto = require('crypto');

async function getFare(pickup,destination){
    if(!pickup || !destination ){
        throw new Error('All fields are required');
    }

    const distanceTime = await mapsService.getDistanceTime(pickup, destination);
    //console.log(distanceTime);
    
    const baseFare={
        auto:30,
        car:50,
        motorcycle:20,
    };
    const perKmRate={
        auto:10,
        car:15,
        motorcycle:5,
    };
    const perMinRate={
        auto:5,
        car:10,
        motorcycle:3,
    };

    const fare ={
        auto:Math.round(baseFare.auto+((distanceTime.distance.value/1000)*perKmRate.auto)+(distanceTime.duration.value/60*perMinRate.auto)),
        car:Math.round(baseFare.car+((distanceTime.distance.value/1000)*perKmRate.car)+(distanceTime.duration.value/60*perMinRate.car)),
        motorcycle:Math.round(baseFare.motorcycle+((distanceTime.distance.value/1000)*perKmRate.motorcycle)+(distanceTime.duration.value/60*perMinRate.motorcycle)),
    };

    return fare;

}

module.exports.getFare = getFare;

function getOtp(num){
    const otp = crypto.randomInt(Math.pow(10,num-1), Math.pow(10,num)).toString();
    return otp;
}

module.exports.createRide = async ({
    user,pickup,destination,vehicleType}
) => {
    if(!pickup || !destination || !vehicleType){
        throw new Error('All fields are required');
    }
    const fare = await getFare(pickup,destination);
    //console.log(fare);
    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        otp:getOtp(6),
        fare:fare[vehicleType]});
    return ride;
}

