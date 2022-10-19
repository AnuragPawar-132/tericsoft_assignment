import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BmiHistory from './BmiHistory'
import HomePage from './HomePage'
import Login from './Login'
import Registration from './Registration'
import UserBmi from './UserBmi'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/user' element={<UserBmi/>}/>
            <Route path='/bmi_history' element={<BmiHistory/>} />
            <Route path='/signup' element={<Registration/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes