import { useState } from "react"
import '../css/registerShopkeeper.css';


const Registershopkeeper = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/User/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const json = await response.json()

        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(json))

        // Handle successful registration
        // You can redirect or perform any other action here
      } else {
        const json = await response.json()

        // Handle registration error
        // You can display an error message or take appropriate action
        console.log(json.error)
      }
    } catch (error) {
      // Handle network or fetch error
      console.error(error)
    }
  }

  return (
    <div id="box4">
      <br />
    <form className="signup" id="signup2" onSubmit={handleSubmit} >
      <h3 id="registeruserh">Sign Up Shopkeeper</h3>

      <label id="registerl1">Email address:</label>
      <br />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        id="registerinput1"
      />
      <br />
      <label id="registerl2">Password:</label>
      <br />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        id="registerinput2"
      />
      <br />
      <button id="registerb">Sign up </button>
    
    </form>
    </div>
  )
}

export default Registershopkeeper
