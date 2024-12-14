const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname,lastname,email,password,color,plate,capacity,vehicleType
})=>{
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password:hashedPassword,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
}