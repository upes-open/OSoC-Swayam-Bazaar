import Header from './Header';
import Basket from './Basket';
import Main from './Main'
import React, { useEffect, useState } from "react";
import axios from "axios";
import data from './data';

function Functionality() {
    // Assuming 'data' is defined somewhere and contains 'products'
    const [products, setProducts] = useState(null); 
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/Products/GetProductsByCategory`, {
            params: {
              category: "grocery" // Adjust the key based on your backend's API expectations
            }
          });
          console.log(response.data);
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };
  
      fetchData();
    },[]);
  
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
    //   <div className="App">
    //     <Header countCartItems={cartItems.length} />
    //     <div className="row">
    //       <Main products={products} onAdd={onAdd} /> {/* Pass 'products' as a prop to Main */}
    //       <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    //     </div>
    //   </div>
    // );
    <div className="App">
      <Header countCartItems={cartItems.length} />
      <div className="row">
        {products ? (
          <Main products={products} onAdd={onAdd} />
        ) : (
          <p>Loading...</p>
        )}
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
  }
  
  export default Functionality;
