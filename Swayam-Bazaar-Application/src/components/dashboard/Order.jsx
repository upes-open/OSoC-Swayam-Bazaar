import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Order = () => {

  const [groceriesData, setgroceriesData] = useState(null);   
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();

  // const GroceryCard = ({ OrderID, name, price, quantity, CustomerEmail}) => {
  //   return (
  //     <div className="grocery-card">
  //       <h3>{OrderID}</h3>
  //       <p>CustomerID : {CustomerEmail}</p>
  //       <p>Product : {name}</p>
  //       <p>Price : {price}</p>
  //       <p>Quantity : {quantity}</p>
  //     </div>
  //   );
  // };

  const GroceryCard = ({ OrderID, name, price, quantity, CustomerEmail}) => {
    const product = { OrderID, name, price, quantity, CustomerEmail};

    return (
        <div className="grocery-card">
        <h3>{OrderID}</h3>
        <p>CustomerID : {CustomerEmail}</p>
        <p>Product : {name}</p>
        <p>Price : {price}</p>
        <p>Quantity : {quantity}</p>
        </div>
    );
};

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // console.log("Hi")
        // Make an API request to check if the user is logged in
        const response = await fetch(`http://localhost:5000/api/Shopkeeper/authenticateShopkeeper`, {
          method: 'GET',
          credentials: 'include',  // Include cookies with the request
        });
        const data = await response.json();
  
        if (response.ok) {
          setUser(data.user);
          console.log(user)
        }
        else{
          alert("Login as shopkeeper to access this page")
          navigate("/")
        }
      } catch (error) {
        alert('Error checking authentication status:', error);
        navigate("/");
      } 
    };
    
    checkAuthStatus();
  }, []);
  
  
  useEffect(() => {
      const fetchData = async () => {
        try {
          console.log(1)
          const ShopName = user.ShopName; // Replace 'YourShopName' with the desired shop name
        const response = await axios.get(`http://localhost:5000/api/Order/getOrderByShopName?ShopName=${ShopName}`);
          console.log(response.data);
          setgroceriesData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };
  
      fetchData();
    }, [user]);


  return (
    <div>
  <div className="title"> Order</div>
  <div className="category-container"> 
     
      {groceriesData != null ? (
      groceriesData
        .map((grocery) => (
          <GroceryCard
          OrderID={grocery.OrderID}
          CustomerEmail={grocery.CustomerEmail}
            key={grocery._id}
            name={grocery.ProductName}
            price={grocery.price}
            quantity={grocery.quantity}
          />
        ))
    ) : (
      <p>No order placed</p>
    )}
         
      </div>
      </div>
  
  )
};

export default Order;
