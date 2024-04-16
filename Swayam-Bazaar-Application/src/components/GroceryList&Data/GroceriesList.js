import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../css/GroceriesList.css';

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
      <h2 className={theme === 'dark' ? 'white-text' : 'dark-text'}>Explore the shops and items</h2>
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
    </div>
  );
};

export default GroceriesList;
