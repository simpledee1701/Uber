import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'> 
    <Link to={'/home'} className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-5 right-5'>
        <i className='ri-home-5-line text-3xl'></i>
    </Link>
        <div className='h-1/2'>
            <img src="" alt="" /> 
        </div>
        <div className='h-1/2 p-4'>
        <div  className='flex items-center justify-between'>
          <img className='h-10' src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Deepak</h2>
                <h4 className='text-lg font-semibold -mt-1 -mb-1'>KA 06 HG 2034</h4>
                <p className='text-gray-600 text-sm'>Maruti Suzuki</p>
            </div>
          </div>
          <div className='flex gap-2 items-center justify-center flex-col'>
              <div className='w-full'>
                  

                  <div className='flex items-center gap-4  border-b-2 p-2'>
                      <i className='text-lg ri-map-pin-2-fill'></i>
                      <div>
                          <h3 className='font-medium text-lg'>203/31/ G</h3>
                          <p className='text-sm text-gray-600'>J.P. Nagar 4th stage</p>
                      </div>
                  </div>

                  <div className='flex items-center gap-4 border-b-2 p-2'>
                      <i className='text-lg ri-currency-line'></i>
                      <div>
                          <h3 className='font-medium text-lg'>193.50</h3>
                          <p className='text-sm text-gray-600'>Cash To Pay</p>
                      </div>
                  </div>
              </div>

          </div>

            <button className='bg-green-600 text-white font-semibold py-2 px-4 mt-7 rounded w-full'>Make a Payment</button>
        </div>
    </div>

  )
}

export default Riding
