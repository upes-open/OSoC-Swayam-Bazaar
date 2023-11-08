
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feedback from "./components/feedback";
import Feed from "./components/allfeed";
import ListShop from "./components/listShop";
import Displayshop from "./components/displayShop";
import RegisterShopkeeper from "./components/RegisterShopkeeper";
import Loginshopkeeper from "./components/Loginshopkeeper";
import Navbar from "./components/navbar/Navbar";
import ContactForm from "./components/Contact";
import Footer from "./components/footer/footer";
import About from "./components/About";

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}></Route>

        <Route path='/login' element={<Login />}></Route>

        <Route path='/register' element={<Register />}></Route>
        <Route path='/feedback' element={<Feedback />}></Route>
        <Route path='/feed' element={<Feed />}></Route>
        <Route path='/listshop' element={<ListShop />}></Route>
        <Route path='/displayshop' element={<Displayshop />}></Route>
        <Route path='/shopkeeper-register' element={<RegisterShopkeeper />}></Route>
        <Route path='/shopkeeper-login' element={<Loginshopkeeper />}></Route>
        <Route path='/contact-us' element={<ContactForm />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
