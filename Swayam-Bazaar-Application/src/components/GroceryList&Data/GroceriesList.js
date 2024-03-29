import React, { useEffect, useState } from "react";
import '../../css/GroceriesList.css';
import axios from "axios";
import { Link } from 'react-router-dom';

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



const GroceriesList = ({ theme }) => {


  const [groceriesData, setgroceriesData] = useState(null);              //To be uncommented

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

console.log(groceriesData)


  return (
    <div className="groceries-list">
      <h2 className={theme === 'dark' ? 'white-text' : 'dark-text'}>Explore the shops and items</h2>
    <h3 style={{justifyContent:"center",fontSize:"35px"}}>Grocery Items</h3>
      <Link className="btn-showall" to="/allproducts">
      <button >Show All</button>
      </Link>
     
      <div className="category-container"> 
     
      {groceriesData != null ? (
  groceriesData
    .filter((grocery) => grocery.category === 'grocery')
    .map((grocery) => (
      <GroceryCard
        key={grocery._id}
        image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
        name={grocery.name}
        Address={'XYZ'}
        openingTime={'8 AM'}
        closingTime={'8 PM'}
      />
    ))
) : (
  <p>No grocery data available</p>
)}
         
            {/* <GroceryCard
            image={RiceImage}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />

<GroceryCard
            image={SoyBeans}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
 <GroceryCard
            image={Tomato}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
             <GroceryCard
            image={Tomato}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
             <GroceryCard
            image={Tomato}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
              <GroceryCard
            image={RiceImage}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />

<GroceryCard
            image={SoyBeans}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
 <GroceryCard
            image={Tomato}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
             <GroceryCard
            image={Tomato}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
             <GroceryCard
            image={Tomato}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            /> */}
       
      </div>
      <br/>
      <h3 style={{justifyContent:"center",fontSize:"35px"}}>Clothes Category</h3>
      <Link className="btn-showall" to="/allproducts">
      <button>Show All</button>
      </Link>
      <div className="category-container"> 

      {groceriesData != null ? (
  groceriesData
    .filter((grocery) => grocery.category === 'clothes')
    .map((grocery) => (
      <GroceryCard
        key={grocery._id}
        image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
        name={grocery.name}
        Address={'XYZ'}
        openingTime={'8 AM'}
        closingTime={'8 PM'}
      />
    ))
) : (
  <p>No grocery data available</p>
)}
          
      {/* <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
              <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            /> */}
      
      </div>
      
      <h3 style={{justifyContent:"center",fontSize:"35px"}}>Electronics</h3>
      <Link className="btn-showall" to="/allproducts">
      <button >Show All</button>
      </Link>
      <div className="category-container"> 
      
      {groceriesData != null ? (
  groceriesData
    .filter((grocery) => grocery.category === 'electronics')
    .map((grocery) => (
      <GroceryCard
        key={grocery._id}
        image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
        name={grocery.name}
        Address={'XYZ'}
        openingTime={'8 AM'}
        closingTime={'8 PM'}
      />
    ))
) : (
  <p>No grocery data available</p>
)}
          
          {/* <GroceryCard
          image={Raymond}
          name='Basmati Rice'
          Address='Lorem-Ipsum Dolor-715245'
          openingTime='08:00 AM'
          closingTime='08:00 PM'
          button='click'
          />
          <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
            <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
            <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
            <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
            <GroceryCard
          image={Raymond}
          name='Basmati Rice'
          Address='Lorem-Ipsum Dolor-715245'
          openingTime='08:00 AM'
          closingTime='08:00 PM'
          button='click'
          />
          <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
            <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
            <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
            <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            /> */}
      </div>
      <h3 style={{justifyContent:"center",fontSize:"35px"}}>Health And Wellness</h3>
      <Link  className="btn-showall" to="/allproducts">
      <button >Show All</button>
      </Link>
      <div className="category-container"> 


      {groceriesData != null ? (
  groceriesData
    .filter((grocery) => grocery.category === 'health')
    .map((grocery) => (
      <GroceryCard
        key={grocery._id}
        image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
        name={grocery.name}
        Address={'XYZ'}
        openingTime={'8 AM'}
        closingTime={'8 PM'}
      />
    ))
) : (
  <p>No grocery data available</p>
)}
      
      {/* <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />

<GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
<GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />

<GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
<GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            /> */}
      </div>
    </div>
  );
};

export default GroceriesList;
