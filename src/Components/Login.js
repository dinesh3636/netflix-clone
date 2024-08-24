import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignin, Setsignin] = useState(true);
  const handdleSignin = () =>{
  Setsignin(!isSignin);
  }
  return (
    <div>
      
      <div className='absolute'>
      <img alt='banenr' src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg'/>
      </div>
      
      <Header/>
      <div className='relative w-3/12 bg-black mx-auto my-40 px-4 py-10 bg-opacity-75' >
        <form>
          <h1 className='text-white font-bold text-3xl m-2'>{isSignin? "SignIn" : "SignUp"}</h1>
          
          <input type='text' placeholder='Email Address' className=' text-white p-2 m-2 w-full bg-gray-700'/>
          <input type='password' placeholder='Password' className='text-white p-2 m-2  w-full bg-gray-700'/>
          <button className='bg-red-600 text-white p-2 rounded-sm w-full m-2' >Sign in</button>
          <p className='m-2 cursor-pointer text-white' onClick={handdleSignin}>{isSignin? "New To Netflix? Sign up": "Already Registerd? Sign in"}</p>
        </form>
      </div>
      
    </div>
    
  )
}

export default Login
