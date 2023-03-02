import React, { useEffect } from 'react';
import './App.css';
import Registration from './pages/registration/Registration.js';
import Category from "./pages/category/Category.js";
import DashBoard from "./pages/dashBoard/DashBoard.js";
import Entertainment from "./pages/entertainment/Entertainment.js";
import {Routes, Route} from "react-router-dom";


function App() {

  useEffect(()=>{
    document.title = "Superapp";
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </div>
  );
}

export default App;
