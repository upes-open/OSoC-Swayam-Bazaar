import Header from './Header';
import Basket from './Basket';
import Main from './Main'
import React, { useState } from 'react';
import data from './data';

function Functionality() {
    // Assuming 'data' is defined somewhere and contains 'products'
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
  
  export default Functionality;
