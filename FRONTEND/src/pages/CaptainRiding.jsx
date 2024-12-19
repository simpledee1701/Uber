import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { gsap } from 'gsap';

const CaptainRiding = () => {
    const [finishPanel,setFinishPanel] = useState(false);
    const finishPanelRef = useRef(null);



    useGSAP(function(){
        if(finishPanel){
          gsap.to(finishPanelRef.current, {
            transform: 'translateY(0%)'
          })
        }
        else{
          gsap.to(finishPanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
        },[finishPanel])

  return (
    <div className='h-screen'>
      <div>
      <img src="" alt="" />
      <Link to={'/captain-home'} className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-5 right-5'>
        <i className='ri-logout-box-r-line text-3xl'></i>
    </Link>
    </div>
        <div className='h-4/5'>
            <img src="" alt="" /> 
        </div>
        <div className='h-1/5  relative p-4 bg-yellow-400' 
        onClick={()=>setFinishPanel(true)}
        
        >
        <h5 className='p-1 text-center w-[90%] top-0 absolute font-bold text-2xl'><i className='ri-arrow-up-wide-line text-gray-600'></i></h5>
            <h4 className='text-xl font-semibold'>4 KM away</h4>
            <button  className='bg-green-600 text-white font-semibold py-2 px-4 mt-7 rounded w-full'>Ride Completed</button>
        </div>

        <div ref={finishPanelRef}  className='fixed z-10  bottom-0 translate-y-full  bg-white px-3 py-6 w-full'>
          <FinishRide setFinishPanel={setFinishPanel}  />
      </div>
    </div>
  )
}

export default CaptainRiding
