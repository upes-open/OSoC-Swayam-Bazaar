
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
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
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Products from "./pages/Products";


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
    <SideBar>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/order" element={<Order />} />
          <Route path="/Products" element={<Products />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
