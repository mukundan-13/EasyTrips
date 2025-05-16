import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Flights from './Flights';
import Hotels from './Hotels';
import Navbar from './NavBar';
import Bus from './Bus';
import Holidays from './Holidays';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/bus" element={<Bus/>}/>
          <Route path='/holidays' element={<Holidays/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
