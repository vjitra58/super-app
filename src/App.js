import React, { useEffect } from 'react';
import './App.css';
import Registration from './components/registration/Registration.js';


function App() {

  useEffect(()=>{
    document.title = "Superapp";
  }, []);

  return (
    <div className="app">
      <Registration />
    </div>
  );
}

export default App;
