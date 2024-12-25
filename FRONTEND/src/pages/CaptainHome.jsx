import React from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { useState } from 'react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'


const CaptainHome = () => {
  const ridePopUpRef = React.useRef(null);
  const confirmRidePopUpRef = React.useRef(null);
  const [ridePopUp, setRidePopUp] = React.useState(true)
  const [confirmRidePopUp, setConfirmRidePopUp] = React.useState(false)

  useGSAP(function(){
    if(ridePopUp){
      gsap.to(ridePopUpRef.current, {
        transform: 'translateY(0%)'
      })
    }
    else{
      gsap.to(ridePopUpRef.current, {
        transform: 'translateY(100%)'
      })
    }
    },[ridePopUp])

    useGSAP(function(){
      if(confirmRidePopUp){
        gsap.to(confirmRidePopUpRef.current, {
          transform: 'translateY(0%)'
        })
      }
      else{
        gsap.to(confirmRidePopUpRef.current, {
          transform: 'translateY(100%)'
        })
      }
      },[confirmRidePopUp])

  return (
    <div className='h-screen'> 
    <div>
      <img src="" alt="" />
      <Link to={'/login'} className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-5 right-5'>
        <i className='ri-logout-box-r-line text-3xl'></i>
    </Link>
    </div>
        <div className='h-3/5'>
            <img src="" alt="" /> 
        </div>
        <div className='h-2/5 p-4'>
       <CaptainDetails />
        </div>
        <div ref={ridePopUpRef}  className='fixed z-10 bottom-0 translate-y-full  bg-white px-3 py-6 w-full'>
          <RidePopUp setRidePopUp={setRidePopUp} setConfirmRidePopUp={setConfirmRidePopUp} />
      </div>

      <div ref={confirmRidePopUpRef}  className='fixed z-10 bottom-0 h-screen translate-y-full  bg-white px-3 py-6 w-full'>
          <ConfirmRidePopUp setConfirmRidePopUp={setConfirmRidePopUp} setRidePopUp={setRidePopUp} />
      </div>
    </div>
  )
}

export default CaptainHome
