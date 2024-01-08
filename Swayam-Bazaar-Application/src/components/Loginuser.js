import { useState } from "react"
import '../css/loginUser.css';

const Loginuser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/User/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        // You can redirect or perform any other action here
        console.log("Login successful!"); // Display a message in the console
      } else {
        // Handle login error
        // You can display an error message or take appropriate action
      }
    } catch (error) {
      // Handle network or fetch error
      console.error(error);
    }
  };

  return (
    <div id="box1" className="flex flex-col justify-center items-center w-screen h-screen">
      <form className="loginuser lg:w-[500px] flex flex-col justify-center gap-y-6 items-center h-[490px] max-sm:w-screen max-md:w-[500px] md:w-[500px] border-2 border-black" id="userform" onSubmit={handleSubmit}>
        <h3 id="userh">Log In <span style={{ color: 'green' }}>User</span></h3>
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
          <button className="bg-yellow-500 p-3 rounded-full w-36">Login</button>
        </div>
        <a id="logina" href="/shopkeeper-login">Log In as Shopkeeper</a>
      </form>
    </div>
  );
};

export default Loginuser;
