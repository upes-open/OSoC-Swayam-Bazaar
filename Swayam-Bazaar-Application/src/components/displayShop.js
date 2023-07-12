/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Displayshop() {
  const [shops, setShops] = useState(null);
  const [query, setQuery] = useState("");
  const port = process.env.REACT_APP_API_PORT || 3001;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:${port}/displayshop`);
        setShops(response.data);
      } catch (error) {
        console.log("Error fetching data of shops", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-48">
        <Link to="/listshop">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg h-14 w-full md:w-44">
            List Your Shop Now
          </button>
        </Link>
        <div className="flex justify-center items-center mt-4 md:mt-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-64 px-4 py-2 bg-gray-200 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(event) => setQuery(event.target.value)}
            />
            <button className="absolute top-0 right-0 h-full px-4 text-white bg-blue-500 rounded-full hover:bg-blue-600">
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
      <div className="mt-5 lg:ml-16 mr-5 ml-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {shops &&
          shops
            .filter((shop) => {
              if (query.trim() === "") {
                return shop;
              } else if (
                shop.shopname.toLowerCase().includes(query.toLowerCase())
              ) {
                return shop;
              }
            })
            .map((shop) => (
              <div
                key={shop.shopname}
                className="bg-white p-6 rounded-lg shadow-md md:w-96"
              >
                <div className="flex flex-col items-center md:items-start h-cover ">
                  <div className="mb-4 h-48 ">
                    <img
                      src={`${shop.shopimage}`}
                      alt="Shop Image"
                      className="h-full w-96 object-fill rounded"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-blue-800">
                    {shop.shopname}
                  </h2>
                  <p className="text-lg text-black mb-2 font-semibold">
                    {shop.description}
                  </p>
                  <p className="text-lg text-gray-600 mb-2 font-semibold">
                    {shop.address}
                  </p>
                  <p className="text-lg text-gray-600 font-semibold">
                    {shop.contactnumber}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
