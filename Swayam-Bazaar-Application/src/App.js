
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
<<<<<<< HEAD
import Header from './components/cart/Header';
import Basket from './components/cart/Basket';
import Main from './components/cart/Main'
import React, { useState } from 'react';
import data from './components/cart/data';
    // <BrowserRouter>
    //   <Routes>
    //   <Route path='/' element={<Navbar/>}></Route>

    //    <Route path='/login' element={<Login/>}></Route>

    //     <Route path='/register' element={<Register/>}></Route>
    //     <Route path='/feedback' element={<Feedback/>}></Route>
    //     <Route path='/feed' element={<Feed/>}></Route>
    //     <Route path='/listshop' element={<ListShop/>}></Route>
    //     <Route path='/displayshop' element={<Displayshop/>}></Route>
    //     <Route path='/shopkeeper-register' element={<RegisterShopkeeper/>}></Route>
    //     <Route path='/shopkeeper-login' element={<Loginshopkeeper/>}></Route>
    //     <Route path='/contact-us' element={<ContactForm/>}></Route>
    //     <Route path='/footer' element={<Footer/>}></Route>
    //   </Routes>
    // </BrowserRouter>

    
=======
import About from "./components/About";
import Dashboard from "./components/dashboard/dashboard";
import Products from "./components/dashboard/Products";
import Order from "./components/dashboard/Order";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='/Products' element={<Products />}></Route>
            <Route path='/order' element={<Order />}></Route>
          </Route>


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
>>>>>>> 433019d2b0e16af3cb7331784e652fcb3c8f34bb

    function App() {
      const { products } = data;
      const [cartItems, setCartItems] = useState([]);
    
      const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };
    
      const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };
    
      return (
        <div className="App">
          <Header countCartItems={cartItems.length} />
          <div className="row">
            <Main products={products} onAdd={onAdd} /> {/* Pass 'products' as a prop to Main */}
            <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          </div>
        </div>
      );
    }
    export default App;