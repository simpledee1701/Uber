import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [userData, setUserData] = useState({});
      const [error, setError] = useState('');
      const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
    
      const submitHandler = (e) => {
        e.preventDefault();
    
        // Password validation
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }
    
        setUserData({
          fullName: {
            firstName: firstName,
            lastName: lastName,
          },
          email: email,
          password: password,
        });
    
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setFirstName('');
        setLastName('');
        setError(''); // Clear error message if successful
      };
    
  return (
    <div className="p-7 flex flex-col h-screen justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/800px-Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-2">What's your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] rounded w-1/2 text-lg px-4 py-3 border-2 border-grey-100 placeholder:text-sm"
              required
              type="text"
              name="fname"
              placeholder="First Name"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] rounded w-1/2 text-lg px-4 py-3 border-2 border-grey-100 placeholder:text-sm"
              required
              type="text"
              name="lname"
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-base font-medium mb-2">Enter your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded w-full text-lg px-4 py-3 border-2 border-grey-100 placeholder:text-sm"
            required
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />

          <h3 className="text-base font-medium mt-4 mb-2">Enter password</h3>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] rounded w-full text-lg px-4 py-3 border-2 border-grey-100 placeholder:text-sm"
              required
              type={showPassword ? 'text' : 'password'} // Toggle type
              name="password"
              placeholder="New Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-sm text-gray-600 hover:text-black"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <h3 className="text-base font-medium mt-4 mb-2">Confirm password</h3>
          <div className="relative">
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-[#eeeeee] rounded w-full text-lg px-4 py-3 border-2 border-grey-100 placeholder:text-sm"
              required
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button
            className="bg-black text-white font-bold rounded w-full mt-7 text-lg px-4 py-3 hover:bg-black/80"
            type="submit"
          >
            Signup
          </button>
        </form>
        <p className="text-center mt-5">
          Already have an account?
          <Link to={'/captain-login'} className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup
