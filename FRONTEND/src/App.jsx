import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainHome from './pages/CaptainHome'
import Home from './pages/Home'
import UserLogout from './pages/UserLogout'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/Signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />

        <Route path="/home" element={
          <UserProtectedWrapper>
          <Home />
          </UserProtectedWrapper>
          } />

        <Route path="/user/logout" element={
          <UserProtectedWrapper>
          <UserLogout />
          </UserProtectedWrapper>
          } />
        <Route path="/captain-home" element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
          } />

        
        
      </Routes>
    </div>
  )
}

export default App