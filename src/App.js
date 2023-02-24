import React, { useEffect } from 'react';
import './App.css';
import Registration from './pages/registration/Registration.js';
import Category from "./pages/category/Category.js";

function App() {

  useEffect(()=>{
    document.title = "Superapp";
  }, []);

  return (
    <div className="app">
      {/* <Registration /> */}
      <Category />
    </div>
  );
}

export default App;
