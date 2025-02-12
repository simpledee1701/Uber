import React from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import { useState } from 'react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { useEffect,useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';



const CaptainHome = () => {
  const ridePopUpRef = React.useRef(null);
  const confirmRidePopUpRef = React.useRef(null);
  const [ridePopUp, setRidePopUp] = React.useState(false)
  const [confirmRidePopUp, setConfirmRidePopUp] = React.useState(false)
  const {socket} = React.useContext(SocketContext);
  const {captain} = useContext(CaptainDataContext);
  const [ride, setRide] = useState(null);

  useEffect(() => {

    socket.emit('join', {userType:'captain',userId:captain._id});

    const updateLocation = () => {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          

          socket.emit('update-location-captain', 
            {
              location : {ltd:position.coords.latitude,
                          lng:position.coords.longitude},
              userId:captain._id
            });
      });
      }
  }


  const locationInterval = setInterval(updateLocation, 10000);
  updateLocation();

  },[captain])

  socket.on('new-ride', (data) => {
    console.log(data);
    setRide(data);
    setRidePopUp(true);
  });

  async function confirmRide(){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
      rideId:ride._id,
      captain:captain._id
    },{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    });
      setConfirmRidePopUp(true);
      setRidePopUp(false);
  }
  

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
          <RidePopUp 
          ride={ride} 
          setRidePopUp={setRidePopUp} 
          setConfirmRidePopUp={setConfirmRidePopUp}
          confirmRide = {confirmRide}
           />
      </div>

      <div ref={confirmRidePopUpRef}  className='fixed z-10 bottom-0 h-screen translate-y-full  bg-white px-3 py-6 w-full'>
          <ConfirmRidePopUp setConfirmRidePopUp={setConfirmRidePopUp} setRidePopUp={setRidePopUp} />
      </div>
    </div>
  )
}

export default CaptainHome
