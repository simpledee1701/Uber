import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainLogin = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const {captain, setCaptain} = React.useContext(CaptainDataContext);


        const submitHandler = async (e) => {
            e.preventDefault();
            const captain = {email:email,password};
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
            if (response.status === 200) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }

            setEmail('');
            setPassword('');
        }
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
        <div>
        <img className='w-6/12 mb-10 ' src='/logo.png'></img>
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
