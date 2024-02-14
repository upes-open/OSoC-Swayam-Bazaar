import Header from './Header';
import React, { useEffect, useState } from "react";
import axios from "axios";
import groceriesList from '../GroceryList&Data/groceriesData.jsx';
import '../../css/cart.css';
//import data from './data.js';
function Functionality() {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [groceriesData, setgroceriesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/Products/getAllProducts`);
        console.log(response.data);
        setgroceriesData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  },[]);

    const GroceryCard = ({ image, name, Address, openingTime, closingTime }) => {
        return (
            <div className="grocery-card">
                <img src={image} alt={name} style={{ width: 200, height: 150, marginLeft: 10 }} />
                <h3>{name}</h3>
                <p>{Address}</p>
                <p>Opening Time: {openingTime}</p>
                <p>Closing Time: {closingTime}</p>
                <button className="btn">Add to Cart</button>
                <button className="btn">Buy Now</button>
            </div>
        );
    };
    
    // Assuming 'data' is defined somewhere and contains 'products'
    // const { products } = data;
    // const [cartItems, setCartItems] = useState([]);
  
    // const onAdd = (product) => {
    //   const exist = cartItems.find((x) => x.id === product.id);
    //   if (exist) {
    //     setCartItems(
    //       cartItems.map((x) =>
    //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    //       )
    //     );
    //   } else {
    //     setCartItems([...cartItems, { ...product, qty: 1 }]);
    //   }
    // };
  
    // const onRemove = (product) => {
    //   const exist = cartItems.find((x) => x.id === product.id);
    //   if (exist.qty === 1) {
    //     setCartItems(cartItems.filter((x) => x.id !== product.id));
    //   } else {
    //     setCartItems(
    //       cartItems.map((x) =>
    //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
    //       )
    //     );
    //   }
    // };


    return (
        <div className="App">
            <Header />
            <div>
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Select category</option>
                    <option value="grocery">Groceries</option>
                    <option value="clothes">Clothes</option>
                    <option value="health">Health And Wellness</option>
                </select>

                <div className="grocery-container">
                {selectedCategory ? (
                    <div className="grocery-container">
                        {groceriesData
                            .filter(item => item.category === selectedCategory)
                            .map((item, index) => (
                                <GroceryCard
                                    key={item._id}
                                    image={item.picture}
                                    name={item.name}
                                    Address={"Address"}
                                    openingTime={"openingtime"}
                                    closingTime={"closingtime"}
                                />
                            ))}
                </div>
                 ) : (
                  <h1>Please select a category to see items</h1>
              )}
            </div>
            </div>
        </div>



    // <div className="App">
    //   <Header countCartItems={cartItems.length} />
    //   <div className="row">
    //     {products ? (
    //       <Main products={products} onAdd={onAdd} />
    //     ) : (
    //       <p>Loading...</p>
    //     )}
    //     <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
    //   </div>
    // </div>
  );
  }
  
  export default Functionality;
