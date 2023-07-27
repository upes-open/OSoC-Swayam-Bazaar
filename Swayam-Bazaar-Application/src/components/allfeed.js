  import axios from "axios";
  import React, { useEffect, useState } from "react";

  export default function Feed() {
    const [feeds, setFeeds] = useState(null);
    // const { port } = require('../server/server');
    const port = process.env.REACT_APP_API_PORT || 5000;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:${port}/api/Feedback/feed`);
          setFeeds(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };

      fetchData();
    }, []);

    return (
      <div>
        {feeds &&
          feeds.map((feed) => (
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6" key={feed._id}>
              <h2 className="text-lg font-semibold mb-4">Order Details</h2>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <p className="mb-2">
                    <span className="font-semibold">Order Number:</span> {feed.ordernumber}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Rating:</span> {feed.rating}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <p className="mb-2">
                    <span className="font-semibold">Product Feedback:</span> {feed.productfeedback}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Delivery Feedback:</span> {feed.deliveryfeedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
