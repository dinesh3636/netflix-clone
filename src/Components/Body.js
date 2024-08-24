import React from 'react'
import Browse from './Browse'
import Header from './Header'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}> </Route>
            <Route path='/broese' element={<Browse/>}> </Route>
        </Routes>
    
    
      
    </div>
  )
}

export default Body
