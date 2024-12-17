import React from 'react'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = React.useRef(null);
  const vehiclePanelRef = React.useRef(null);
  const panelCloseRef = React.useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const submitHandler=(e)=>{
    e.preventDefault();
  }
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }
    else{
      gsap.to(panelRef.current, {
        height: '0%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
    },[vehiclePanelOpen])
    

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png'></img>
      <div className='h-screen w-screen'>
        //Image here
      </div>

      <div className='bg-white flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
        <h5 
        ref={panelCloseRef}
        onClick={()=>setPanelOpen(false)}
        className=' absolute opacity-0 top-4 right-6 text-2xl'>
          <i className='ri-arrow-down-wide-line'></i>
        </h5>
        <h4 className='text-2xl font-semi-bold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
          }}>
          <div className="line absolute h-20 w-1 top-[40%] left-10 bg-gray-900 rounded-full "></div>
          <input 
          onClick={()=>setPanelOpen(true)}
          value={pickup}
          onChange={(e)=>setPickup(e.target.value)}
          className='bg-[#eee] px-12 py-2 text-base w-full mt-5 rounded'  type="text" placeholder="Add a pickup location" />
          <input 
          onClick={()=>setPanelOpen(true)}
          value={destination}
          onChange={(e)=>setDestination(e.target.value)}
          className='bg-[#eee] px-12 py-2 text-base w-full mt-3 rounded' type="text" placeholder="Add a dropoff location" />
        </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel  setPanelOpen={setPanelOpen} 
          setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>

      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full'>
        <h2 className='font-semibold text-2xl mb-5'>Choose a vehicle</h2>

          <div className='flex border-2 active:border-gray-600 rounded-xl items-center justify-between w-full p-3 mb-2'>
            <img className='h-10' src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png" alt="" />
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 min away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>
            </div>
            <h2 className='text-xl font-semi-bold'> ₹193.20</h2>
          </div>

          <div className='flex border-2 active:border-gray-600 rounded-xl items-center  justify-between w-full p-3 mb-2'>
            <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/7/Yellow-Motorcycle-Bike-PNG-HD-Quality.png" alt="" />
            <div className='w-1/2 ml-8'>
              <h4 className='font-medium text-base'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 min away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
            </div>
            <h2 className='text-xl font-semi-bold'> ₹65.20</h2>
          </div>

          <div className='flex border-2 active:border-gray-600 rounded-xl items-center  justify-between w-full p-3'>
            <img className='h-12' src="https://i.pinimg.com/736x/43/2f/6d/432f6d0df7b4fa8ebfa2212c8a34ca8e.jpg" alt="" />
            <div className='w-1/2 ml-10'>
              <h4 className='font-medium text-base'>Auto <span><i className='ri-user-3-fill'></i>3</span></h4>
              <h5 className='font-medium text-sm'>1 min away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
            </div>
            <h2 className='text-xl font-semi-bold'> ₹85.20</h2>
          </div>
      </div>

    </div>
  )
}

export default Home
