
// App.jsx
import React, { useEffect, useState } from 'react';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import './App.css';

// Pages and Components
import { Home, Login, Registration, Dashboard, ComingSoon } from "./pages";
import ForgotPassword from "./pages/ForgotPassword";
import AddNewRental from "./components/dashboard-components/AddNewRental/AddNewRental";
import SearchRental from "./components/dashboard-components/SearchRental-section/SearchRental";
import RenterDetails from "./components/dashboard-components/RenterDetails/RenterDetails";
import PaymentsRecord from "./components/dashboard-components/PaymentsRecord/PaymentsRecord";
import TotalRentCollected from "./components/dashboard-components/TotalRentCollected/TotalRentCollected";
import PropertyListing from "./components/dashboard-components/PropertyListing/PropertyListing";
import ListedProperty from "./components/dashboard-components/ListedProperty/ListedProperty";
import CreateNewRental from "./components/dashboard-components/CreateNewRental/CreateNewRental";
import Contributors from "./components/Contributors-page/Contributors";
import AdminDashboard from "./components/Admin-Dashboard/AdminDashboard";
import Preloader from "./components/Preloader/PreLoader";
import PrivacyPolicy from "./components/Privacy-Policy/PrivacyPolicy";
import TermsConditions from "./components/Terms-Conditions/TermsConditions";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState(Array(10).fill({ x: 0, y: 0 }));

  // Hide Preloader after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsPreloaderVisible(false), 5000);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  // Update cursor trail on mouse move
  const updateCursor = (e) => {
    const newTrail = trail.slice();
    newTrail.unshift({ x: e.clientX, y: e.clientY });
    newTrail.pop();
    setTrail(newTrail);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, [trail]);

  return (
    <>
      {/* Custom Main Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>

      {/* Cursor Tail */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="cursor-tail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (10 - index) / 10, // Tail fades out
          }}
        ></div>
      ))}

      {/* Preloader or Routes */}
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/searchrenter" element={<SearchRental />} />
          <Route path="/dashboard/createnewrenter" element={<CreateNewRental />} />
          <Route path="/dashboard/addnewrenter" element={<AddNewRental />} />
          <Route path="/dashboard/renterdetails" element={<RenterDetails />} />
          <Route path="/dashboard/paymentsrecord" element={<PaymentsRecord />} />
          <Route path="/Contributors" element={<Contributors />} />
          <Route path="/dashboard/totalrentcollected" element={<TotalRentCollected />} />
          <Route path="/dashboard/propertylisting" element={<PropertyListing />} />
          <Route path="/dashboard/listedproperty" element={<ListedProperty />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/Terms-Conditions" element={<TermsConditions />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      )}

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/searchrenter" element={<SearchRental />} />
        <Route
          path="/dashboard/createnewrenter"
          element={<CreateNewRental />}
        />
        <Route path="/dashboard/addnewrenter" element={<AddNewRental />} />
        <Route path="/dashboard/renterdetails" element={<RenterDetails />} />
        <Route path="/dashboard/paymentsrecord" element={<PaymentsRecord />} />
        <Route path="/Contributors" element={<Contributors />} />
        <Route
          path="/dashboard/totalrentcollected"
          element={<TotalRentCollected />}
        />
        <Route
          path="/dashboard/propertylisting"
          element={<PropertyListing />}
        />
        <Route path="/dashboard/listedproperty" element={<ListedProperty />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-Conditions" element={<TermsConditions />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/Feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};

export default App;
