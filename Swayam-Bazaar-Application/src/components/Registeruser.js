import { useState } from "react"


const Registeruser = () => {
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
        console.log("User Registered")

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
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up User</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button >Sign up</button>
      
    </form>
  )
}

export default Registeruser