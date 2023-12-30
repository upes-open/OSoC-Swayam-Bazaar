import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShopCard({ shop }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center md:items-start h-full">
        <div className="mb-4 h-40 md:h-48">
          <img src={shop.shopimage} alt={shop.shopname} className="w-full h-full object-cover rounded" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-green-800">
          {shop.shopname}
        </h2>
        <p className="text-lg md:text-base text-gray-800 mb-2 font-semibold">
          {shop.description}
        </p>
        <p className="text-lg md:text-base text-gray-600 mb-2 font-semibold">
          {shop.address}
        </p>
        <p className="text-lg md:text-base text-gray-600 font-semibold">
          {shop.contactnumber}
        </p>
      </div>
    </div>
  );
}

export default function DisplayShop() {
  const [shops, setShops] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const apiPort = process.env.REACT_APP_API_PORT || 3001;

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(`http://localhost:${apiPort}/displayshop`);
        setShops(response.data);
      } catch (error) {
        console.error("Error fetching shop data", error);
      }
    };
    fetchShops();
  }, [apiPort]);

  const filteredShops = shops
    ? shops.filter((shop) => {
        if (searchQuery.trim() === "") {
          return true;
        }
        return shop.shopname.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : [];

  return (
    <div className="container mx-auto mt-5">
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center">
        <Link to="/listshop">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg h-14 w-full md:w-44">
            List Your Shop Now
          </button>
        </Link>
        <div className="flex justify-center items-center mt-4 md:mt-0 w-full md:w-1/2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 bg-gray-100 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button className="absolute top-0 right-0 h-full px-4 text-white bg-green-500 rounded-full hover:bg-green-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 10l4 4m0 0l-4 4m4-4H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredShops.map((shop) => (
          <ShopCard key={shop.shopname} shop={shop} />
        ))}
      </div>
    </div>
  );
}
