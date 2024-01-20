import { useState } from "react"
import '../css/registerShopkeeper.css';


const Registershopkeeper = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState("")
  const [mobile, setMobile] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/Shopkeeper/signupShopkeeper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, confirmpassword, mobile })
      })
      

      if (response.ok) {
        const json = await response.json()
        alert("User Registered. Head to Login")

        // Handle successful registration
        // You can redirect or perform any other action here
      } else {
        const json = await response.json()

        // Handle registration error
        // You can display an error message or take appropriate action
        alert(json.error)
      }
    } catch (error) {
      // Handle network or fetch error
      console.error("error")
    }
  }

  return (
    <div id="box4" className="flex flex-col justify-center items-center w-screen h-screen">
      <form className="loginuser lg:w-[500px] flex flex-col justify-center gap-y-6 items-center h-[490px] max-sm:w-screen max-md:w-[500px] md:w-[500px] border-2 border-black" id="userform" onSubmit={handleSubmit}>
        <h3 id="userh">Sign Up <span style={{ color: 'green' }}>Shopkeeper</span></h3>
        <div className="space-y-4">
          <div className="font-bold text-xl">Email address:</div>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="h-10 w-60 rounded-md outline-none p-2"
          />
        </div>
        <div className="space-y-4">
          <div className="font-bold text-xl">Password:</div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="h-10 w-60 rounded-md outline-none p-2"
          />
        </div>
        <div>
          <button className="bg-pink-500 p-3 rounded-full w-36">SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default Registershopkeeper
