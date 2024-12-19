import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = React.useState('');
    const submitHandler = (e) => {
      e.preventDefault();
    }

  return (
    <div>
      <h5 className='p-3 text-center absolute top-3 right-3 font-bold text-2xl' onClick={()=>props.setConfirmRidePopUp(false)}><i className='ri-arrow-down-wide-line text-gray-600'></i></h5>
        <h2 className='font-semibold text-2xl mb-5'>Confirm The ride to start!</h2>
        <div className='flex items-center justify-between p-4 bg-gray-100 rounded-lg'>
            <div className='flex items-center gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="data:image/jpeg;base64,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" alt="" />
            <h2 className='font-medium text-lg'>Dee patel</h2>
            </div>
            <h5 className='text-lg  font-semibold'>2.2 KM</h5>
        </div>
        <div className='flex gap-2 items-center justify-center flex-col'>
            <div className='w-full'>
                <div className='flex items-center gap-4 border-b-2  p-2'>
                    <i className='text-lg ri-map-pin-2-line'></i>
                    <div>
                        <h3 className='font-medium text-lg'>562/11/ A</h3>
                        <p className='text-sm text-gray-600'>BMS Boys Hostel, Near Basavanagudi Temple</p>
                    </div>
                </div>

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
            <div className='w-full'>
            <form onSubmit={(e)=>{
                submitHandler(e);
            }}>
                <input 
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                className='bg-[#eee] px-6 py-4 text-base font-mono w-full mt-3 rounded'
                type="text" placeholder='Enter OTP' />

                <Link to={'/captain-riding'} className='bg-green-600 flex justify-center text-white font-semibold py-2 px-4 mt-7 rounded w-full'>Confirm</Link>

                <button onClick={() => {
                      props.setConfirmRidePopUp(false);
                      props.setRidePopUp(false);
                  }} className='bg-red-500 text-white font-semibold py-2 px-4 mt-2 rounded w-full'>Cancle</button>
              </form>
            </div>
              
            
        </div>
    </div>
  )
}

export default ConfirmRidePopUp
