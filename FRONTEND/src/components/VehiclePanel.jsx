import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center absolute top-3 right-3 font-bold text-2xl' onClick={()=>props.setVehiclePanelOpen(false)}><i className='ri-arrow-down-wide-line text-gray-600'></i></h5>
        <h2 className='font-semibold text-2xl mb-5'>Choose a vehicle</h2>

          <div onClick={()=>{
            props.setConfirmedRidePanel(true)
            props.setVehicleType('car')
          }
          } className='flex border-2 active:border-gray-600 rounded-xl items-center justify-between w-full p-3 mb-2'>
            <img className='h-10' src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png" alt="" />
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>
            </div>
            <h2 className='text-xl font-bold'> ₹{props.fare.car}</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmedRidePanel(true)
            props.setVehicleType('motorcycle')
          }} className='flex border-2 active:border-gray-600 rounded-xl items-center  justify-between w-full p-3 mb-2'>
            <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/7/Yellow-Motorcycle-Bike-PNG-HD-Quality.png" alt="" />
            <div className='w-1/2 ml-8'>
              <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 min away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
            </div>
            <h2 className='text-xl font-bold'> ₹{props.fare.motorcycle}</h2>
          </div>

          <div onClick={()=>{
            props.setConfirmedRidePanel(true)
            props. setVehicleType('auto')
            }} className='flex border-2 active:border-gray-600 rounded-xl items-center  justify-between w-full p-3'>
            <img className='h-12' src="https://i.pinimg.com/736x/43/2f/6d/432f6d0df7b4fa8ebfa2212c8a34ca8e.jpg" alt="" />
            <div className='w-1/2 ml-10'>
              <h4 className='font-medium text-base'>Auto <span><i className='ri-user-3-fill'></i>3</span></h4>
              <h5 className='font-medium text-sm'>1 min away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
            </div>
            <h2 className='text-xl font-bold'> ₹{props.fare.auto}</h2>
          </div>
    </div>
  )
}

export default VehiclePanel
