import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaSpinner, FaUserTie } from 'react-icons/fa';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!email || !password) {
      setError('Email and password are required.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        { email, password }
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Invalid Email or Password');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Login error:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8"
      >
        <div className="text-center mb-6">
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="h-16 mx-auto mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="text-gray-500 mt-2">Sign in to continue</p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-center"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={submitHandler} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-[14px] text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-[14px] text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center items-center py-3 rounded-xl text-white font-semibold transition duration-300 shadow-md ${
              isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
            }`}
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin mr-2" /> Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="flex justify-between items-center mt-6 text-sm">
          <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-blue-600 hover:text-blue-800">
            Create Account
          </Link>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-x-0 top-[50%] border-t border-gray-200"></div>
          <span className="relative bg-white px-3 text-gray-500">OR</span>
        </div>

        <Link
          to="/captain-login"
          className="w-full flex justify-center items-center py-3 rounded-xl bg-green-600 hover:bg-green-700 transition duration-300 shadow-md text-white font-semibold"
        >
          <FaUserTie className="mr-2" /> Sign in as Captain
        </Link>
      </motion.div>
    </div>
  );
};

export default UserLogin;
