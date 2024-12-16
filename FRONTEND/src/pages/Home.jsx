import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='h-screen bg-cover bg-center bg-[url("https://files.oaiusercontent.com/file-BpmjgTbTRaNSb3Kpx5LZb3?se=2024-12-16T16%3A28%3A20Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df63482ad-9aae-4d6e-9252-fbbd36f7dbc6.webp&sig=ey/ycVarF3Cn0UPMUL1lafMt2SJFHG784AMQgoAp1J8%3D")] pt-8 flex justify-between flex-col w-full'> 
        <img className='w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png'></img>
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started</h2>
            <Link to={'/login'} className='flex items-center justify-center bg-black w-full text-white py-2 px-4 mt-4 rounded'>Continue</Link>
        </div>
      </div>

    </div>
  )
}

export default Home
