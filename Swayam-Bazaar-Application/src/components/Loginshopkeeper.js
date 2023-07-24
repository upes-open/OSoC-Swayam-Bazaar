import { useState } from "react"
import '../css/loginShopkeeper.css';

const Loginshopkeeper = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/Shopkeeper/loginshopkeeper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        // Handle successful login
        // You can redirect or perform any other action here
      } else {
        // Handle login error
        // You can display an error message or take appropriate action
      }
    } catch (error) {
      // Handle network or fetch error
      console.error(error)
    }
  }

  return (
    <div id="box2">
      <br />
      <form id="shopkeeperform" className="loginShopkeeper" onSubmit={handleSubmit}>
        <h3 id="userh">Log In <span style={{color:'green'}}>Shopkeeper</span></h3>

        <label id="userl1">Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="inputuser1"
        />
        <br />
        <label id="userl2">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="inputuser2"
        />

        <button id="userb2" >Log in</button>

      </form>
    </div>
  )
}

export default Loginshopkeeper
