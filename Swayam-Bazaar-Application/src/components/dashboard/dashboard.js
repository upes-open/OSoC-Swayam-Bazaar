import "./dashboard.css";
import SideBar from "./Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard.jsx";
import Order from "./Order";
import Products from "./Products";
function dashboard() {
  return (
    // <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/Products" element={<Products />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    // </Router>
  );
}

export default dashboard;
