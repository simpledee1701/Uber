import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center absolute top-3 right-3 font-bold text-2xl' onClick={()=>props.setConfirmedRidePanel(false)}><i className='ri-arrow-down-wide-line text-gray-600'></i></h5>
        <h2 className='font-semibold text-2xl mb-5'>Confirm your ride</h2>
        <div className='flex gap-2 items-center justify-center flex-col'>
            <img className='h-20' src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png" alt="" />
            <div className='w-full'>
                <div className='flex items-center gap-4 border-b-2  p-2'>
                    <i className='text-lg ri-map-pin-2-line'></i>
                    <div>
                        
                        <p className='text-sm text-gray-600'>{props.pickup}</p>
                    </div>
                </div>

                <div className='flex items-center gap-4  border-b-2 p-2'>
                    <i className='text-lg ri-map-pin-2-fill'></i>
                    <div>
                        
                        <p className='text-sm text-gray-600'>{props.destination}</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 border-b-2 p-2'>
                    <i className='text-lg ri-currency-line'></i>
                    <div>
                        <h3 className='font-medium text-lg'>{props.fare[props.vehicleType]}</h3>
                        <p className='text-sm text-gray-600'>cash to pay</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>{props.setVehicleFound(true)
              props.setConfirmedRidePanel(false);
              props.createRide();
            }
            } className='bg-green-600 text-white font-semibold py-2 px-4 mt-7 rounded w-full'>Confirm</button>
        </div>

    </div>
  )
}

export default ConfirmedRide
