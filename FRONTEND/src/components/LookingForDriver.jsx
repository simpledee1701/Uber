import React from 'react';

const LookingForDriver = ({ setVehicleFound, pickup, destination, fare, vehicleType }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <button
        className='absolute top-3 right-3 text-gray-600 text-2xl'
        onClick={() => setVehicleFound(false)}
      >
        <i className='ri-arrow-down-wide-line'></i>
      </button>
      <div className='bg-white shadow-lg rounded-2xl p-6 max-w-md w-full'>
        <h2 className='font-semibold text-2xl text-center mb-5 text-gray-800'>Looking for Driver</h2>
        <div className='flex flex-col items-center'>
          <img className='h-24 mb-4' src='https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png' alt='Car' />
          <div className='w-full'>
            {/* Pickup Location */}
            <div className='flex items-center gap-4 border-b p-3'>
              <i className='text-lg ri-map-pin-2-line text-blue-500'></i>
              <div>
                <h3 className='font-medium text-lg text-gray-800'>Pickup</h3>
                <p className='text-sm text-gray-600'>{pickup}</p>
              </div>
            </div>

            {/* Destination */}
            <div className='flex items-center gap-4 border-b p-3'>
              <i className='text-lg ri-map-pin-2-fill text-red-500'></i>
              <div>
                <h3 className='font-medium text-lg text-gray-800'>Destination</h3>
                <p className='text-sm text-gray-600'>{destination}</p>
              </div>
            </div>

            {/* Fare */}
            <div className='flex items-center gap-4 border-b p-3'>
              <i className='text-lg ri-currency-line text-green-500'></i>
              <div>
                <h3 className='font-medium text-lg text-gray-800'>{fare[vehicleType]}</h3>
                <p className='text-sm text-gray-600'>Cash To Pay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
