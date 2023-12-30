import "./dashboard.css";
import SideBar from "./Sidebar/SideBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./mainDashboardd.jsx";
import Order from "./Order.jsx";
import Products from "./Products.jsx";
function dashboard() {
  return (
    // <Router>
      <SideBar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </SideBar>
    // </Router>
  );
}

export default dashboard;
