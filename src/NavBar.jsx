import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  

  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <Link to="/" className="text-2xl font-bold text-blue-500">
        EasyTrips
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/flights" className="hover:underline">Flights</Link>
        <Link to="/hotels" className="hover:underline">Hotels</Link>
        <Link to="/bus" className="hover:underline">Bus</Link>
        <Link to="/holidays" className="hover:underline">Holidays</Link>
      </div>
    </nav>
  );
}

export default Navbar;
