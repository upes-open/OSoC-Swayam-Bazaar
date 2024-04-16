import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../css/GroceriesList.css';
import Modal from 'react-modal';
const GroceryCard = ({ image, name, address, price, openingTime, closingTime }) => {
  return (
    <div className="grocery-card">
      <img src={image} alt={name} style={{ width: 200, height: 150, marginLeft: 10 }} />
      <h3>{name}</h3>
      <p>Shop : {address}</p>
      <p>Price : {price}</p>
      <button className="btn">Add to Cart</button>
      <button className="btn">Buy Now</button>
    </div>
  );
};

const GroceriesList = ({ theme }) => {
  const [groceriesData, setGroceriesData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false);
    const [productsData, setproductsData] = useState(null);
    const [email, setEmail] = useState('');

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
  }, []);


  const handleSubmit = async (e) => {

    const orderdetails = []

    const storedEmail = localStorage.getItem('userEmail');
    console.log(storedEmail)
    if (storedEmail) {
        setEmail(storedEmail);
    }
    for (const item of cartItems) {
      const orderData = {
          ShopName: item.product.ShopName,
          ProductName: item.product.name,
          quantity: item.quantity,
          price: item.product.price
      };
      orderdetails.push(orderData)
  }
  console.log(orderdetails)

  const formData = { CustomerEmail: storedEmail, orderdetails: orderdetails }
  // Make the API call
  axios.post(`http://localhost:5000/api/Order/neworder`, formData,)
      .then(result => {
          console.log(result);
          // formik.resetForm();
      })
      .catch(err => console.log(err));

  window.location.href = "https://rzp.io/l/grMOFWeJX";
};

// Function to add a grocery product to the cart
const addProductToCart = (product) => {
  const existingItemIndex = cartItems.findIndex((item) =>
      item.product.id === product.id && item.product.name === product.name
  );
  if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity++;
      setCartItems(updatedCart);
  } else {
      setCartItems([...cartItems, { product: product, quantity: 1 }]);
  }
  // Show notification
  setIsNotificationVisible(true);
  // Hide notification after 2 seconds (adjust as needed)
  setTimeout(() => {
      setIsNotificationVisible(false);
  }, 2000);
  console.log(cartItems)
  
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


const GroceryCard = ({ id, image, name, ShopName, price }) => {
  const product = { id, image, name, ShopName, price };

  const onAddToCart = () => {
      addProductToCart(product);
  };

  return (
      <div className="grocery-card">
          <img src={image} alt={name} style={{ width: 200, height: 150, marginLeft: 10 }} />
          <h3>{name}</h3>
          <p>Shop Name : {ShopName}</p>
          <p>Price: {price}</p>
          <button onClick={onAddToCart} className="btn">
              Add to Cart
          </button>
          <button className="btn">Buy Now</button>
      </div>
  );
};

useEffect(() => {
  // Cleanup function to clear timeout when component unmounts
  return () => clearTimeout();
}, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/Products/getAllProducts");
        console.log(response.data);
        setGroceriesData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="groceries-list">
       <Modal
                isOpen={isNotificationVisible}
                onRequestClose={() => setIsNotificationVisible(false)}
                contentLabel="Notification Modal"
                className="transparent-modal"
                overlayClassName="transparent-overlay"
            >
                <div className="notification">
                    <p>Item added to cart successfully!</p>
                </div>
            </Modal>
      <h2 className={theme === 'dark' ? 'white-text' : 'dark-text'}>Explore the shops and items</h2>
      <button id="cart" onClick={() => setIsCartOpen(true)}>Open Cart</button>
      <h3 style={{ justifyContent: "center", fontSize: "35px" }}>Grocery Items</h3>
      <Link className="btn-showall" to="/allproducts">
        <button>Show All</button>
      </Link>

      <div className="category-container">
        {groceriesData !== null ? (
          groceriesData
            .filter((grocery) => grocery.category === 'Grocery')
            .map((grocery) => (
              <GroceryCard
                key={grocery._id}
                image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
                name={grocery.name}
                address={grocery.ShopName}
                price={grocery.price}
                openingTime={'8 AM'}
                closingTime={'8 PM'}
              />
            ))
        ) : (
          <p>No grocery data available</p>
        )}
      </div>

      <br />
      <h3 style={{ justifyContent: "center", fontSize: "35px" }}>Clothes Category</h3>
      <Link className="btn-showall" to="/allproducts">
        <button>Show All</button>
      </Link>
      <div className="category-container">
        {groceriesData !== null ? (
          groceriesData
            .filter((grocery) => grocery.category === 'Clothes')
            .map((grocery) => (
              <GroceryCard
                key={grocery._id}
                image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
                name={grocery.name}
                address={grocery.ShopName}
                price={grocery.price}
                openingTime={'8 AM'}
                closingTime={'8 PM'}
              />
            ))
        ) : (
          <p>No grocery data available</p>
        )}
      </div>

      <h3 style={{ justifyContent: "center", fontSize: "35px" }}>Electronics</h3>
      <Link className="btn-showall" to="/allproducts">
        <button>Show All</button>
      </Link>
      <div className="category-container">
        {groceriesData !== null ? (
          groceriesData
            .filter((grocery) => grocery.category === 'Electronics')
            .map((grocery) => (
              <GroceryCard
                key={grocery._id}
                image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
                name={grocery.name}
                address={grocery.ShopName}
                price={grocery.price}
                openingTime={'8 AM'}
                closingTime={'8 PM'}
              />
            ))
        ) : (
          <p>No grocery data available</p>
        )}
      </div>

      <h3 style={{ justifyContent: "center", fontSize: "35px" }}>Health And Wellness</h3>
      <Link className="btn-showall" to="/allproducts">
        <button>Show All</button>
      </Link>
      <div className="category-container">
        {groceriesData !== null ? (
          groceriesData
            .filter((grocery) => grocery.category === 'Health And Wellness')
            .map((grocery) => (
              <GroceryCard
                key={grocery._id}
                image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
                name={grocery.name}
                address={grocery.ShopName}
                price={grocery.price}
                openingTime={'8 AM'}
                closingTime={'8 PM'}
              />
            ))
        ) : (
          <p>No grocery data available</p>
        )}
      </div>
      <Modal
                    isOpen={isCartOpen}
                    onRequestClose={() => setIsCartOpen(false)}
                    contentLabel="Cart Modal"
                >
                    <div className="cart-container">
                        <h2>Cart</h2>
                        {cartItems.map((cartItem, index) => (
                            <div key={index} className="cart-item">
                                <img src={cartItem.product.image} alt={cartItem.product.name} />
                                <p>{cartItem.product.name}</p>
                                <p>Price: Rs.{cartItem.product.price}</p>
                                <br />
                                <div className='line'>
                                    <button onClick={() => decreaseQuantity(index)}>-</button>
                                    <p>{cartItem.quantity}</p>
                                    <button onClick={() => increaseQuantity(index)}>+</button>
                                </div>
                                <br />
                                <button id="remove" onClick={() => deleteProductFromCart(index)}>Remove</button>
                            </div>
                        ))}
                        <p>Total Amount: Rs.{calculateTotalAmount()}</p>
                        <button id="payment" onClick={handleSubmit}> <p>Proceed to payment </p></button>
                        <button id="close" onClick={() => setIsCartOpen(false)}>Close Cart</button>
                    </div>
                </Modal>
    </div>
  );
};

export default GroceriesList;
