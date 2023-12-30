import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../css/feed.css';

export default function Feed() {
  const [feeds, setFeeds] = useState(null);
  const port = process.env.REACT_APP_API_PORT || 5000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:${port}/api/Feedback/feed`);
        setFeeds(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [port]);

  useEffect(() => {
    // document.body.style.background = `url(${image}) `;
    document.body.style.background = `url() `;
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.background = null;
    };
  }, []);

  return (
    <div >
      <h2 className="text-3xl m-8 flex justify-center font-bold">Feedbacks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 m-14">
        {feeds &&
          feeds.map((feed) => (
            <div className="bg-blue-300 rounded-3xl shadow-md p-4" key={feed._id}>
              <div className="flex flex-col">
                <p className="mb-2">
                  <span className="font-semibold">Order Number:</span> {feed.ordernumber}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Rating:</span> {feed.rating}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Product Feedback:</span> {feed.productfeedback}
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Delivery Feedback:</span> {feed.deliveryfeedback}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
