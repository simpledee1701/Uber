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
import axios from 'axios';

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
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [ activeField, setActiveField ] = useState(null)
  const [ fare, setFare ] = useState({})
  const [vehicleType, setVehicleType] = useState('');


  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    
    try {
      const response = await axios.get(`http://localhost:4000/maps/get-suggestions`, {
          params: { origin: e.target.value },
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      });
      console.log('Suggestions:', response.data);
      setPickupSuggestions(response.data || []);
  } catch (error) {
      console.error('Error fetching suggestions:', error.response?.data || error.message);
      setPickupSuggestions([]);
  }
  
}

const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
        const response = await axios.get(`http://localhost:4000/maps/get-suggestions`, {
            params: { origin: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch {
        // handle error
    }
}



  const submitHandler = (e) => {
    e.preventDefault();
  }
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)'
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(function () {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(0%)'
      })
    }
    else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmedRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0%)'
      })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitForDriver) {
      gsap.to(waitForDriverRef.current, {
        transform: 'translateY(0%)'
      })
    }
    else {
      gsap.to(waitForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitForDriver])



  async function findTrip() {
    if (!pickup || !destination) {
      throw new Error('All fields are required');
    }
    setVehiclePanelOpen(true)
    setPanelOpen(false)
    //console.log('pickup', pickup)

    const response = await axios.get(`http://localhost:4000/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    //console.log(response.data);
    setFare(response.data)
  }

  async function createRide(){
    const response = await axios.post(`http://localhost:4000/rides/create`, {
      pickup,
      destination,
      vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data);
  }


    

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-6/12 mb-10 ' src='/logo.png'></img>
      <div className='h-screen w-screen'>
        //Image here
      </div>

      <div className=' flex flex-col justify-end h-screen absolute  top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form className='relative py-3' onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
              }}
              value={pickup}
              onChange={handlePickupChange}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
              type="text"
              placeholder='Add a pick-up location'
            />
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              value={destination}
              onChange={handleDestinationChange}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
              type="text"
              placeholder='Enter your destination' />
          </form>
          <button
            onClick={findTrip}
            className='bg-black text-white px-4 py-2 rounded-lg w-full'>
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className='bg-white mt-7 h-0'>
          <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full'>
      <VehiclePanel 
      setVehicleType={setVehicleType}
      fare={fare} setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

      <div ref={confirmedRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full'>
          <ConfirmedRide 
          vehicleType={vehicleType}
          pickup={pickup} destination={destination} 
          createRide={createRide} setConfirmedRidePanel={setConfirmedRidePanel} 
          setVehicleFound={setVehicleFound} fare={fare} />
      </div>

      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 w-full'>
          <LookingForDriver 
          vehicleType={vehicleType}
          pickup={pickup} destination={destination} fare={fare} 
          setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitForDriverRef} className='fixed z-10 bottom-0  bg-white px-3 py-6 w-full'>
          <WaitForDriver waitForDriver={waitForDriver} />
      </div>

    </div>
  )
}

export default Home
