/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Displayshop() {
  const [shops, setShops] = useState(null);
  const port = process.env.REACT_APP_API_PORT || 3001;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:${port}/displayshop`
        );
        setShops(response.data);
      } catch (error) {
        console.log("Error fetching data of shops", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <div className="flex flex-row justify-center">
        <Link to="/listshop"><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg h-14 w-44">
          List Your Shop Now
        </button></Link>
      </div>
      <div className="mt-5 ml-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {shops &&
          shops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white p-6 rounded-lg shadow-md w-96"
            >
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-4">
                  <img
                    src={`${shop.shopimage}`}
                    alt="Shop Image"
                    className="h-48 w-[23rem] object-fill rounded"
                  />
                </div>

                <h2 className="text-3xl font-bold mb-2 text-blue-800 ml-28">
                  {shop.shopname}
                </h2>
                <p className="text-lg text-black mb-2 font-semibold">{shop.description}</p>
                <p className="text-lg text-gray-600 mb-2 font-semibold">{shop.address}</p>
                <p className="text-lg text-gray-600 font-semibold">{shop.contactnumber}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
