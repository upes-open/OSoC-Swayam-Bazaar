import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/feedback.css";
import React, { useState, useEffect } from 'react'; 
import Switch from 'react-switch';
import bg from '../../components/navbar/bg.jpg';
import '../../components/navbar/navbar.css';
import logo from "../../components/images/Logo_.png"
import { width } from "@mui/system";
// import FeedbackModel from "../../models/Schema";
export default function Feedback() {
  const [theme, setTheme] = useState('light');
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  const toggleChatbot = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
  };

  useEffect(() => {
    if (theme !== 'dark') {
      document.body.style.background = `url(${bg}) `;
      // document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
    return () => {
      document.body.style.background = null;
    };
  }, [theme]);
  const formik = useFormik({
    initialValues: {
      ordernumber: "",
      rating: "",
      productfeedback: "",
      deliveryfeedback: "",
    },
    onSubmit,
  });

  const port = process.env.REACT_APP_API_PORT || 5000;
  async function onSubmit(values) {
    // const directory = process.env.SITE_URL || "localhost:3001"
    axios
      .post(`http://localhost:${port}/api/Feedback/feedback`, values)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    // console.log(values)
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          theme === "dark" ? "dark" : "light"
        } flex justify-center`}
        style={{ backgroundColor: theme === "dark" ? "#333" : "white" }}
      >
        <div className="container-fluid">
          <div className="ms-2">
            <Link exact to="/">
              <img src={logo} alt="logo" style={{ width: "15%" }} />
            </Link>
          </div>

          <button
            className="navbar-toggler absolute top-3 right-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse visible mt-3 -ms-4" id="navbarNav">
            <div className="navbar-nav w-full ms-11 flex justify-around">
              <div className="nav-item">
                <Link
                  className={`nav-link ${theme === "dark" ? "dark-mode" : ""}`}
                  to="/navbar"
                >
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  className={`nav-link ${theme === "dark" ? "dark-mode" : ""}`}
                  to="/about"
                >
                  About
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  className={`nav-link ${theme === "dark" ? "dark-mode" : ""}`}
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mb-3">
                <Link
                  className={`nav-link ${theme === "dark" ? "dark-mode" : ""}`}
                  to="/feedback"
                >
                  Feedback
                </Link>
              </div>
              <div className="switch -ms-12 pt-2 mb-4">
                <Switch
                  checked={theme === "dark"}
                  onChange={() => toggleTheme(theme)}
                  onColor="#2C3245"
                  offColor="#E1E2E2"
                  onHandleColor="#fff"
                  handleDiameter={10}
                  uncheckedIcon="🔆"
                  checkedIcon="🌙"
                  height={25}
                  width={57}
                  className="theme-toggle-switch px-5"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="container1">
      <Link to="/feeds">
  <button
    className="feed-btn"
    style={{ width: '100%', marginBottom: '120vh' }}
  >
    Check All Feedbacks
  </button>
</Link>

        <div class="contact-box flex justify-center w-full m-5">
          <div class="left"></div>
          <div class="right">
            <h2 class="font-bold text-lg">Product and Delivery Feedback</h2>
            <form onSubmit={formik.handleSubmit} className="feedback-form">
              <div className="mb-4">
                <label
                  htmlFor="order-number"
                  className="flex justify-start pt-2 ps-1 mb-1 text-slate-950"
                >
                  Order Number
                </label>
                <input
                  type="text"
                  id="ordernumber"
                  name="ordernumber"
                  placeholder="Enter your order number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  {...formik.getFieldProps("ordernumber")}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="flex justify-start ps-1 mb-1 text-slate-950"
                >
                  Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  {...formik.getFieldProps("rating")}
                >
                  <option value="">Select a rating</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="average">Average</option>
                  <option value="below average">Below Average</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productfeedback"
                  className="flex justify-start ps-1 mb-1 text-slate-950"
                >
                  Product Feedback
                </label>
                <textarea
                  id="productfeedback"
                  name="productfeedback"
                  rows="4"
                  placeholder="Enter your feedback about the product"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  {...formik.getFieldProps("productfeedback")}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="deliveryfeedback"
                  className="flex justify-start ps-1 mb-1 text-slate-950"
                >
                  Delivery Feedback
                </label>
                <textarea
                  id="deliveryfeedback"
                  name="deliveryfeedback"
                  rows="4"
                  placeholder="Enter your feedback about the delivery"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  {...formik.getFieldProps("deliveryfeedback")}
                ></textarea>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
