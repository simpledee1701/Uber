import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const userData = { email, password };

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );


      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Invalid Email or Password');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Error during login:', error); // Debugging logs
    }

    setEmail('');
    setPassword('');
  };
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
        <div>
        <img className='w-6/12 mb-10' src='/logo.png'></img>
        <form onSubmit={(e) => 
            {submitHandler(e);
            }} 
            >
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
        <p className='text-center mt-5'>New here?<Link to={'/signup'} className=' text-blue-600' >Create an account</Link></p>

        </div>
        <div>
            <Link to={'/captain-login'}
            className='bg-[green] flex justify-center text-white font-bold rounded w-full mt-7 text-lg px-4 py-3 hover:bg-black/80'
            >Sign in as Captain</Link>
        </div>
      
    </div>
  )
}

export default UserLogin
