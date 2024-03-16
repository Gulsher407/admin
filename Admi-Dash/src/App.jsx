import React from "react";
import AddServices from "./Crud/AddServices";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Crud/Services";
import UpdateServices from "./Crud/UpdateServices";
import Dashboard from './Components/Dashboard'
import ServicesList from "./Components/ServicesList";
import Footer from "./Components/Footer";
import Forgetp from "./Users/Forgetp"
import Login from "./Users/Login"
import Signup from "./Users/Signup"

function App() {
  return (
    <BrowserRouter>
      <Navbar Title="Swirl Markting" />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/servicesList" element={<ServicesList />} />

        <Route exact path="/addservices" element={<AddServices/>} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/edit/:id" element={<UpdateServices/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forget-pass" element={<Forgetp />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
