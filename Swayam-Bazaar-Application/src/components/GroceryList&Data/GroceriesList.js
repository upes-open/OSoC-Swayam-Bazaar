import React from 'react';
import '../../css/GroceriesList.css';
import groceriesData from './groceriesData';

const GroceryCard = ({ image, name, Address, openingTime, closingTime }) => {
  return (
    <div className="grocery-card">
      <img src={image} alt={name} style={{ width: 200, height: 150, marginLeft: 10 }} />
      <h3>{name}</h3>
      <p>{Address}</p>
      <p>Opening Time: {openingTime}</p>
      <p>Closing Time: {closingTime}</p>
      <button className="btn">Open</button>
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

const GroceriesList = ({ theme }) => {
  return (
    <div className="groceries-list">
      <h2 className={theme === 'dark' ? 'white-text' : 'dark-text'}>Explore the shops and items</h2>
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
        ))}
      </div>
    </div>
  );
};

export default GroceriesList;
