import React from 'react';
import '../../css/GroceriesList.css';
import groceriesData from './groceriesData';
import RiceImage from"../images/Rice.jpg";
import SoyBeans from "../images/Soybeans.jpg";
import Tomato from "../images/Tomatoes.jpg";
import Raymond from "../images/Logo_.png";

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
  return (
    <div className="groceries-list">
      <h2 className={theme === 'dark' ? 'white-text' : 'dark-text'}>Explore the shops and items</h2>
    <h3 style={{justifyContent:"center",fontSize:"35px"}}>Grocery Items</h3>
      <button className="btn-showall">Show All</button>
      <div className="category-container"> 
     
       
         
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
    </div>
  );
};

export default GroceriesList;
