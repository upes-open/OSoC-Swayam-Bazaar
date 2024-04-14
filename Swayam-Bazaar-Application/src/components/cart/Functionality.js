import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header';
import './../../css/basket.css';
import groceriesList from '../GroceryList&Data/groceriesData.jsx';
import '../../css/cart.css';


function Functionality() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [cartItems, setCartItems] = useState([]); // State for cart items
    const [productsData, setproductsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/api/Products/getAllProducts`);
            console.log(response.data);
            setproductsData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error.message);
          }
        }
          fetchData();
  },[]);

  const handleSubmit = async (e) => {

    const formData = {CustomerEmail : 'abc@gmail.com', orderdetails : [{ProductName : 'abc',ShopName : 'qwerty', quantity : 1, price : 50},{ProductName : 'xyz',ShopName : 'poiuytre', quantity : 5, price : 150}]}
    // Make the API call
    axios.post(`http://localhost:5000/api/Order/neworder`, formData,)
      .then(result => {
        console.log(result);
        // formik.resetForm();
      })
      .catch(err => console.log(err));

  };

    // Function to add a grocery product to the cart
    const addProductToCart = (product) => {
        const existingItemIndex = cartItems.findIndex((item) => 
            item.product.id === product.id && item.product.name === product.name
        );
        if (existingItemIndex !== -1) {
            // If product already exists in cart, update quantity
            const updatedCart = [...cartItems];
            updatedCart[existingItemIndex].quantity++;
            setCartItems(updatedCart);
        } else {
            // If product doesn't exist in cart, add it
            setCartItems([...cartItems, { product: product, quantity: 1 }]);
        }
    };

    // Function to delete a grocery product from the cart
    const deleteProductFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    // Function to increase quantity of a grocery product in the cart
    const increaseQuantity = (index) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity++;
        setCartItems(updatedCart);
    };

    // Function to decrease quantity of a grocery product in the cart
    const decreaseQuantity = (index) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity--;
            setCartItems(updatedCart);
        }
    };

    // Function to calculate the total amount in the cart
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const GroceryCard = ({ id, image, name, Address, ShopName, closingTime, price }) => {
        const product = { id, image, name, Address, ShopName, closingTime, price };

        const onAddToCart = () => {
            addProductToCart(product);
        };

        return (
            <div className="grocery-card">
                <img src={image} alt={name} style={{ width: 200, height: 150, marginLeft: 10 }} />
                <h3>{name}</h3>
                <p>{Address}</p>
                <p>Shop Name: {ShopName}</p>
                <p>Closing Time: {closingTime}</p>
                <p>Price: {price}</p>
                <button onClick={onAddToCart} className="btn">
                    Add to Cart
                </button>
                <button className="btn">Buy Now</button>
            </div>
        );
    };

    return (
        <div className="App">
            <Header />
            <div>
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Select category</option>
                    <option value="groceries">Groceries</option>
                    <option value="clothes">Clothes</option>
                    <option value="health">Health And Wellness</option>
                </select>

                <div className="grocery-container">
                    {selectedCategory ? (
                        <div className="grocery-container">
                            {productsData
                                .filter((item) => item.category === selectedCategory)
                                .map((item, index) => (
                                    <GroceryCard
                                        key={index}
                                        id={item.id}
                                        image={item.picture}
                                        name={item.name}
                                        Address={item.Address}
                                        ShopName={item.ShopName}
                                        price={item.price}
                                    />
                                ))}
                        </div>
                    ) : (
                        <h1>Please select a category to see items</h1>
                    )}
                </div>

                <div className="cart-container">
                    <h2>Cart</h2>
                    {cartItems.map((cartItem, index) => (
                        <div key={index} className="cart-item">
                            <img src={cartItem.product.image} alt={cartItem.product.name} />
                            
                             <p>{cartItem.product.name}</p>
                             <p>Price:Rs.{cartItem.product.price}</p>
                             <br/>
                             <div className='line'>  <button onClick={() => decreaseQuantity(index)}>-</button> <p> {cartItem.quantity}</p>  <button onClick={() => increaseQuantity(index)}>+</button></div>
                            <br/>
                            <button id="remove" onClick={() => deleteProductFromCart(index)}>Remove</button>
                        </div>
                    ))}
                    <p>Total Amount: Rs.{calculateTotalAmount()}</p>
                    <button id="payment">Proceed to payment</button>
                    <button id="buy" onClick={handleSubmit}>Try Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Functionality;
