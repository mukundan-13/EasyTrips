import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { LocationEdit,LocationEditIcon,Train,Hourglass,Users,Bus } from "lucide-react";
function Flights() {
  const [darkMode, setDarkMode] = useState(false);

  const Data=[
    { label: "From", value: "Chennai",icon:<LocationEdit size={20}/> },
    { label: "To", value: "Delhi",icon:<LocationEditIcon size={20}/> },
    { label: "Departure", value: "2025-06-10",icon:<Train size={20}/> },
    { label: "Return", value: "2025-06-20",icon:<Hourglass size={20}/> },
    { label: "Travellers", value: "2 Adults",icon:<Users size={20}/>},
    { label: "Class", value: "Economy",icon:<Bus size={20}/> },
  ];
  return (
    <div
      className={`p-6 max-w-6xl mx-auto transition-colors duration-500
        ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-600 via-yellow-100 to-blue-50 text-blue-900"}`}
    >
      <div className="flex justify-end mb-4">
        <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full border hover:scale-105 transition"
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Book Flights
      </h1>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-xl shadow-lg mb-8
          ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}
      >
        {Data.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-md ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.icon}
              {item.label}
            </p>
            <h2 className="text-lg font-semibold">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <button
          className={`px-6 py-3 rounded-full transition-all hover:scale-105 ${
            darkMode
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Search Flights
        </button>
      </div>

      <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
        Available Flights
      </h2>
      <div className="grid gap-5">
        {[
          { name: 'IndiGo', from: 'Chennai', to: 'Delhi', price: '₹4,500' },
          { name: 'Air India', from: 'Mumbai', to: 'Kolkata', price: '₹5,200' },
          { name: 'SpiceJet', from: 'Delhi', to: 'Goa', price: '₹4,800' },
          { name: 'Vistara', from: 'Bangalore', to: 'Hyderabad', price: '₹3,900' },
          { name: 'AirAsia', from: 'Pune', to: 'Ahmedabad', price: '₹3,200' },
          { name: 'Go First', from: 'Jaipur', to: 'Lucknow', price: '₹2,700' },
        ].map((flight, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-6 rounded-xl shadow-md transition duration-300
              ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:shadow-lg"}`}
          >
            <div>
              <h3 className="text-xl font-bold">{flight.name}</h3>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {flight.from} → {flight.to}
              </p>
            </div>
            <div className="text-right">
              <p className={`text-lg font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                {flight.price}
              </p>
              <button
                className={`mt-2 px-4 py-2 rounded text-sm transition-all hover:scale-105 ${
                  darkMode
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
