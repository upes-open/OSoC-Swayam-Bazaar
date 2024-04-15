
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from "./components/loginregisterasuser/Loginuser";
import RegisterUser from "./components/loginregisterasuser/Registeruser";
import LoginShopkeeper from './components/loginregisterasshopkeeper/Loginshopkeeper';
import RegisterShopkeeper from './components/loginregisterasshopkeeper/RegisterShopkeeper';
import Navbar from './components/navbar/Navbar';
import Feedback from './components/Feedbacks/feedback.js';
import Feed from './components/Feedbacks/allfeed.js';
import ContactUs from './components/ContactUs/Contact.js';
import Dashboard from "./components/dashboard/dash";
import Products from "./components/dashboard/Products";
import Order from "./components/dashboard/Order";
import Cart from "./components/cart/Functionality.js";
// import Basket from "./components/cart/Basket.js";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginUser />}></Route>
          <Route path='/loginuser' element={<LoginUser />}></Route>
          <Route path='/registeruser' element={<RegisterUser />}></Route>
          <Route path='/loginshopkeeper' element={<LoginShopkeeper />}></Route>
          <Route path='/registershopkeeper' element={<RegisterShopkeeper />}></Route>
          <Route path='/navbar' element={<Navbar />}></Route>
          <Route path='/feedback' element={<Feedback />}></Route>
          <Route path='/feeds' element={<Feed />}></Route>
          <Route path='/allproducts' element={<Cart />}></Route>
          {/* <Route path='/bucket' element={<Basket />}></Route> */}
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/' element={<Dashboard />} >
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/Products' element={<Products />}></Route>
            <Route path='/order' element={<Order />}></Route>

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;