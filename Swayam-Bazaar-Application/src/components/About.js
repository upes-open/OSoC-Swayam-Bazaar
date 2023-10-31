// About.js

import React, { useMemo } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import bg from "../components/navbar/bg.jpg";
import logo from "../components/images/Logo_.png";
import { useEffect, useState } from "react";
import Footer from "./footer/footer";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import Logo from "./Logo";

const About = () => {
  const {isLoaded}=useLoadScript({
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });
  const [theme, setTheme] = useState("light");
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleTheme = (theme) => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  const toggleChatbot = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
  };

  useEffect(() => {
    if (theme !== "dark") {
      document.body.style.background = `url(${bg})`;
    } else {
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
    return () => {
      document.body.style.background = null;
    };
  }, [theme]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit,
  });

  const port = process.env.REACT_APP_API_PORT || 5000;

  async function onSubmit(values) {
    axios
      .post(`http://localhost:${port}/api/Contact/contact-us`, values)
      .then((result) => {
        console.log(result);
        formik.resetForm();
      })
      .catch((err) => console.log(err));
    console.log(values);
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
            <Link exact to="/" className="p-2">
              <Logo className="max-h-16" /> {/* Adjust the max-height class */}
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
          <div className="navbar-collapse visible mt-3 -ms-4" id="navbarNav">
            <div className="navbar-nav w-full ms-11 flex justify-around">
              <div className="nav-item">
                <Link
                  className={`nav-link ${theme === "dark" ? "dark-mode" : ""}`}
                  to="/"
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
                  to="/contact-us"
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
      <div className="bg-white mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
        In today's fast-paced world, the importance of supporting local businesses cannot be overstated. This web application is designed with the primary goal of connecting users with local vendors in their area, facilitating the purchase of groceries and other goods directly from these vendors. Unlike the existing local application known as City Mall, which limits users to generic shopping experiences, our application will empower users to choose their preferred local shops. The central mission of this project is to forge a direct and robust connection between users and local shops, thereby revitalizing the spirit of community commerce.

Key Features and Objectives:

Shop Selection: Our application's cornerstone feature is the ability for users to handpick the specific local shops from which they want to make purchases. This personalized approach sets us apart from other platforms.

Quality and Affordability: We aim to promote the exceptional offerings of lesser-known, local shops that might not be prominent brands but provide high-quality and affordable goods. Whether it's artisanal bread, handcrafted furniture, or farm-fresh produce, users will discover hidden gems in their community.

Community Involvement: To tackle the challenge of building a comprehensive dataset, we propose an innovative solution: shopkeepers themselves can input their products into the application. This crowdsourcing approach is akin to how Google Maps allows users to add new places to the database, ensuring that our platform remains up-to-date and diverse.

Dual Logins: The application will feature two distinct login interfaces – one for users and another for shopkeepers. This segregation is essential for maintaining clarity and ensuring that both user groups have the functionalities they require.

User Experience:

Our platform will be designed with user experience in mind. Here's what users can expect:

Shop Discovery: Users can explore an array of local shops, filter by category, and read reviews and recommendations from other users to find the best match for their needs.

Seamless Shopping: Once users have selected a shop, they can easily browse products, add them to their cart, and proceed to a convenient checkout process.

Interactive Community: The application will encourage interaction among users, allowing them to share their experiences, leave reviews, and connect with fellow community members.

Shopkeeper Interface: Shopkeepers will have access to a dedicated dashboard where they can manage their shop's profile, update product listings, and track their sales.

Potential Benefits:

Economic Empowerment: By connecting users directly with local vendors, we aim to boost local economies, helping shopkeepers thrive and enabling users to access unique, high-quality products.

Community Building: The application will foster a sense of community by encouraging users to explore their local shops, support neighborhood businesses, and engage with other like-minded individuals.

Convenience and Choice: Users will enjoy the convenience of online shopping while also having the freedom to choose their preferred shops, promoting a more personalized and enjoyable shopping experience.

Conclusion:

This web application aspires to bridge the gap between users and local vendors, promoting local businesses, community engagement, and personalized shopping experiences. With the power of technology and the spirit of community commerce, our platform aims to revolutionize the way people shop and support their local neighborhoods. Together, we can make a difference, one local vendor at a time.
        </p>
      </div>
      {/* <Map/> */}

      <Footer className="bg-white" />
    </>
  );
};

function Map(){
    const center=useMemo(()=>({lat:98,lng:-70}),[]);
    return <GoogleMap zoom={10} center={{lat:44,lng:-80}} className="w-full h-full" >
        <Marker position={center} />
    </GoogleMap>;
}

export default About;
