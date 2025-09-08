import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div className="relative p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      {/* Close Button */}
      <h5
        className='absolute top-3 right-3 text-2xl cursor-pointer text-gray-600 hover:text-gray-800'
        onClick={() => props.setConfirmedRidePanel(false)}
      >
        <i className='ri-arrow-down-wide-line'></i>
      </h5>

      {/* Title */}
      <h2 className='font-semibold text-2xl mb-5 text-center'>Confirm your ride</h2>

      {/* Ride Details */}
      <div className='flex flex-col items-center gap-4'>
        <img
          className='h-20 object-cover'
          src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png"
          alt="Car"
        />
        
        <div className='w-full'>
          {/* Pickup Details */}
          <div className='flex items-center gap-4 border-b-2 p-4'>
            <i className='text-lg ri-map-pin-2-line text-gray-600'></i>
            <p className='text-sm text-gray-600'>{props.pickup}</p>
          </div>

          {/* Destination Details */}
          <div className='flex items-center gap-4 border-b-2 p-4'>
            <i className='text-lg ri-map-pin-2-fill text-gray-600'></i>
            <p className='text-sm text-gray-600'>{props.destination}</p>
          </div>

          {/* Fare Details */}
          <div className='flex items-center gap-4 border-b-2 p-4'>
            <i className='text-lg ri-currency-line text-gray-600'></i>
            <div>
              <h3 className='font-medium text-lg text-gray-800'>{props.fare[props.vehicleType]}</h3>
              <p className='text-sm text-gray-600'>cash to pay</p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => {
            props.setVehicleFound(true)
            props.setConfirmedRidePanel(false);
            props.createRide();
          }}
          className='bg-green-600 text-white font-semibold py-3 px-6 mt-7 rounded-lg w-full transition-all ease-in-out hover:bg-green-700'
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default ConfirmedRide
