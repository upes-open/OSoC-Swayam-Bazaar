import React, { useEffect, useState } from "react";
import '../../css/GroceriesList.css';
import axios from "axios";
// import groceriesData from './groceriesData';


function GroceriesList() {

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

const getCategoryName = (id) => {
  let category = '';
  if (id === 6) {
    category = 'Clothes Category';
  } else if (id === 11) {
    category = 'Electronics';
  } else if (id === 16) {
    category = 'Health And Wellness';
  }
  return category;
};

const getUniqueCategories = () => {
  if (!groceriesData || !Array.isArray(groceriesData)) {
    return [];
  }
  // Extract unique categories from the data
  const uniqueCategories = [...new Set(groceriesData.map((grocery) => grocery.category))];
  console.log("qwer5ty")
  console.log(uniqueCategories)
  return uniqueCategories;
};

// const GroceriesList = ({ theme }) => {
  return (
    <div className="groceries-list">
      <h2 className={theme === 'dark' ? 'white-text' : 'dark-text'}>Explore the shops and items</h2>
    <h3 style={{justifyContent:"center",fontSize:"35px"}}>Grocery Items</h3>
      <button className="btn-showall">Show All</button>
      <div className="category-container"> 
     
        {/* {groceriesData.map((grocery, index) => (
          <React.Fragment key={grocery.id}>
            {(index % 5 === 0) && <h3>{getCategoryName(grocery.id)}</h3>}
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
            />
       
      </div>
      <br/>
      <h3 style={{justifyContent:"center",fontSize:"35px"}}>Clothes Category</h3>
      <button className="btn-showall">Show All</button>
      <div className="category-container"> 
          
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
            />
      <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      
      </div>
      
      <h3 style={{justifyContent:"center",fontSize:"35px"}}>Electronics</h3>
      <button className="btn-showall">Show All</button>
      <div className="category-container"> 
      
        
          
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
            />
            <GroceryCard
            image={Raymond}
            name='Basmati Rice'
            Address='Lorem-Ipsum Dolor-715245'
            openingTime='08:00 AM'
            closingTime='08:00 PM'
            button='click'
            />
      </div>
      <h3 style={{justifyContent:"center",fontSize:"35px"}}>Health And Wellness</h3>
      <button className="btn-showall">Show All</button>
      <div className="category-container"> 
      <h3 style={{justifyContent:"center"}}>Grocery Items</h3>
        {groceriesData.map((grocery, index) => (
          <React.Fragment key={grocery.id}>
            {(index % 5 === 0) && <h3>{getCategoryName(grocery.id)}</h3>}
            <GroceryCard
              key={grocery.id}
              image={grocery.image}
              name={grocery.name}
              Address={grocery.Address}
              openingTime={grocery.openingTime}
              closingTime={grocery.closingTime}
            />
          </React.Fragment>
        ))} */}

        {getUniqueCategories().map((category) => (
        <div key={category} className="category-container">
          <h3 style={{ justifyContent: "center", fontSize: "35px" }}>{category}</h3>
          {groceriesData
            .filter((grocery) => grocery.category === category)
            .map((grocery) => (
              <GroceryCard
                key={grocery._id}
                image={grocery.picture} // Assuming the image URL is stored in the 'picture' property
                name={grocery.name}
                Address={"XYZ"}
                openingTime={"8 AM"}
                closingTime={"8 PM"}
              />
            ))}
      </div>
        ))}
    </div>
  );
};
// };

export default GroceriesList;
