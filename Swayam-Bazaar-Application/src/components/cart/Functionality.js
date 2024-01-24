import Header from './Header';
import React, { useState } from 'react';
import groceriesList from '../GroceryList&Data/groceriesData.jsx';
import '../../css/cart.css';

function Functionality() {
    const [selectedCategory, setSelectedCategory] = useState('');

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
                        {groceriesList
                            .filter(item => item.category === selectedCategory)
                            .map((item, index) => (
                                <GroceryCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    Address={item.Address}
                                    openingTime={item.openingTime}
                                    closingTime={item.closingTime}
                                />
                            ))}
                </div>
                 ) : (
                  <h1>Please select a category to see items</h1>
              )}
            </div>
            </div>
        </div>
    );
}

export default Functionality;
