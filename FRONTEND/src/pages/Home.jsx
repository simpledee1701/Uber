import React from 'react'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = React.useRef(null);
  const vehiclePanelRef = React.useRef(null);
  const vehicleFoundRef = React.useRef(null);
  const waitForDriverRef = React.useRef(null);
  const confirmedRidePanelRef = React.useRef(null);
  const panelCloseRef = React.useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitForDriver, setWaitForDriver] = useState(false);

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

    useGSAP(function(){
      if(confirmedRidePanel){
        gsap.to(confirmedRidePanelRef.current, {
          transform: 'translateY(0%)'
        })
      }
      else{
        gsap.to(confirmedRidePanelRef.current, {
          transform: 'translateY(100%)'
        })
      }
      },[confirmedRidePanel])

      useGSAP(function(){
        if(vehicleFound){
          gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(0%)'
          })
        }
        else{
          gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(100%)'
          })
        }
        },[vehicleFound])

        useGSAP(function(){
          if(waitForDriver){
            gsap.to(waitForDriverRef.current, {
              transform: 'translateY(0%)'
            })
          }
          else{
            gsap.to(waitForDriverRef.current, {
              transform: 'translateY(100%)'
            })
          }
          },[waitForDriver])
    

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
      <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

      <div ref={confirmedRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full'>
          <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full'>
          <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitForDriverRef} className='fixed z-10 bottom-0  bg-white px-3 py-6 w-full'>
          <WaitForDriver waitForDriver={waitForDriver} />
      </div>

    </div>
  )
}

export default Home
