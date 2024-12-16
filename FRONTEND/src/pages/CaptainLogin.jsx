import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const CaptainLogin = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [captainData, setCaptainData] = useState({});
        const submitHandler = (e) => {
            e.preventDefault();
            setCaptainData({email: email, password: password});
            setEmail('');
            setPassword('');
        }
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
        <div>
        <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png'></img>
        <form onSubmit={(e) => 
            {submitHandler(e);
            e.preventDefault();
            }} 
            action="">
            <h3 className='text-lg font-medium mb-2 '>What's your email</h3>
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            className='bg-[#eeeeee] rounded w-full text-lg px-4 py-3 border-2 border-grey-100 placeholder:text-sm' type="text" name="email" placeholder="example@gmail.com"/>

            <h3 className='text-lg font-medium mt-4 mb-2'>Enter password</h3>
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded w-full text-lg px-4 py-3 border-2 border-grey-100 placeholder:text-sm' required type="password" name="password" placeholder="Password"/>

            <button 
            className='bg-black text-white font-bold rounded w-full mt-7 text-lg px-4 py-3 hover:bg-black/80'
            type="submit">Login</button>
        </form>
        <p className='text-center mt-5'>Want to be a capatain? <Link to={'/captain-signup'} className=' text-blue-600' >Register as Captain</Link></p>

        </div>
        <div>
            <Link to={'/login'}
            className='bg-[#dfb220] flex justify-center text-white font-bold rounded w-full mt-7 text-lg px-4 py-3 hover:bg-black/80'
            >Sign in as User</Link>
        </div>
      
    </div>
  )
}

export default CaptainLogin
