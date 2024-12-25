import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/start.png')"}}>
      <div className='h-screen flex justify-between flex-col w-full'> 
      <img className='w-6/12 mt-5 ml-3 p-2' src='/logo.png'></img>
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started</h2>
            <Link to={'/login'} className='flex items-center justify-center bg-black w-full text-white py-2 px-4 mt-4 rounded'>Continue</Link>
        </div>
      </div>

    </div>
  )
}

export default Start
