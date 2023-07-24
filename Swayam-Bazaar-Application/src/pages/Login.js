import React from 'react'
import Loginuser from '../components/Loginuser'
import Loginshopkeeper from '../components/Loginshopkeeper'
import './landr.css'//temporary css

const Login = () => {
  return (
    <div id='container' style={{display:'flex'}}>
      <Loginuser/>
        {/* <Loginshopkeeper/> */}
    </div>
  )
}

export default Login