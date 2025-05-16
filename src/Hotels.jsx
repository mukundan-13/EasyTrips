import React, { useState } from "react";
import { Sun, Moon, Star, Users, Calendar, Bed } from "lucide-react";

const Hotels = () => {
  const [darkMode, setDarkMode] = useState(false);

  const destinations = [
    {
      city: "Paris",
      image: "assets/hotel3.jpg",
      rating: 5,
      price: "₹7,500",
    },
    {
      city: "Tokyo",
      image: "assets/tokyo.jpg",
      rating: 4.7,
      price: "₹9,200",
    },
    {
      city: "Bali",
      image: "assets/bali-hotel.jpg",
      rating: 3.3,
      price: "₹5,800",
    },
    {
      city: "Dubai",
      image: "assets/dubai-hotel.jpg",
      rating: 4.6,
      price: "₹8,400",
    },
    {
      city: "London",
      image: "assets/hotel1.jpg",
      rating: 5,
      price: "₹10,000",
    },
    {
      city: "Singapore",
      image: "assets/hotel2.jpg",
      rating: 3.7,
      price: "₹7,900",
    },
  ];

  const Data=[
    { label: "City", value: "Chennai", icon: <Users size={20} /> },
    { label: "Hotel", value: "Sunshine Grand", icon: <Bed size={20} /> },
    { label: "Check-in", value: "2025-06-15", icon: <Calendar size={20} /> },
    { label: "Check-out", value: "2025-06-20", icon: <Calendar size={20} /> },
    { label: "Guests", value: "2 Adults", icon: <Users size={20} /> },
    { label: "Room", value: "Deluxe Room", icon: <Bed size={20} /> },
  ]
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-full-${i}`}
          className={`inline-block ${
            darkMode ? "text-yellow-400" : "text-yellow-500"
          }`}
          size={18}
          fill="currentColor"
          stroke="none"
        />
      );
    }

    if (halfStar) {
      stars.push(
        <Star
          key="star-half"
          className={`inline-block ${
            darkMode ? "text-yellow-400" : "text-yellow-500"
          }`}
          size={18}
          fill="url(#halfGrad)"
          stroke="none"
          style={{ clipPath: "inset(0 50% 0 0)" }}
        />
      );
    }

    return stars;
  };

  return (
    <div
      className={`p-6 max-w-6xl mx-auto min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-blue-600 via-yellow-100 to-blue-50 text-blue-900"
      }`}
    >
      <div className="flex justify-end mb-6">
       <button
                   onClick={() => setDarkMode(!darkMode)}
                   className="p-2 rounded-full border hover:scale-105 transition"
                 >
                   {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                 </button>
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Book Hotels
      </h1>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl shadow-lg mb-10 ${
          darkMode ? "bg-gray-800" : "bg-blue-50"
        }`}
      >
        {Data.map(({ label, value, icon }, idx) => (
          <div
            key={idx}
            className={`flex items-center space-x-4 p-4 rounded-md ${
              darkMode ? "bg-gray-700" : "bg-white"
            } shadow-md`}
          >
            <div
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-600 text-blue-400" : "bg-blue-100 text-blue-600"
              }`}
            >
              {icon}
            </div>
            <div>
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {label}
              </p>
              <h2 className="text-lg font-semibold">{value}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-14">
        <button
          className={`px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105 ${
            darkMode
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Search Hotels
        </button>
      </div>
      <h2
        className={`text-3xl font-semibold mb-8 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Book Hotels at Popular Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:shadow-xl"
            }`}
          >
            <img
              src={item.image}
              alt={item.city}
              className="h-48 w-full object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-1">{item.city}</h3>
              <p className="flex items-center space-x-1 mb-2">
                {renderStars(item.rating)}
                <span
                  className={`ml-2 text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  ({item.rating.toFixed(1)})
                </span>
              </p>
              <p
                className={`text-lg font-semibold ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {item.price} / night
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
