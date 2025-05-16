import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Sun, Moon } from "lucide-react";

function Holidays() {
  const [animate, setAnimate] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const holidayPackages = [
    {
      title: "Tropical Bali Escape",location: "Bali, Indonesia",
      duration: "7 Days",
      price: "₹45,000",
      image: "assets/bail tropical.jpg",
    },
    {
      title: "European Wonders",
      location: "Paris, Rome, London",
      duration: "10 Days",
      price: "₹90,000",
      image: "assets/european.jpg",
    },
    {
      title: "Safari Adventure",
      location: "Kenya, Africa",
      duration: "5 Days",
      price: "₹60,000",
      image: "assets/safari.jpg",
    },
    {
      title: "Alaskan Cruise",
      location: "Alaska, USA",
      duration: "12 Days",
      price: "₹1,20,000",
      image: "assets/alaska.jpg",
    },
    {
      title: "Mystical Japan",
      location: "Tokyo, Kyoto, Osaka",
      duration: "9 Days",
      price: "₹85,000",
      image: "assets/holiday-tokyo.jpg",
    },
    {
      title: "Caribbean Beach Holiday",
      location: "Bahamas",
      duration: "8 Days",
      price: "₹75,000",
      image: "assets/carrribean.jpg",
    },
  ];

  useEffect(() => {
    setAnimate(true);
    const handleScroll = () => {
      const cards = document.querySelectorAll(".holiday-card");
      const windowBottom = window.innerHeight + window.scrollY;
      const newVisible = [];

      cards.forEach((card, i) => {
        const cardTop = card.offsetTop + 100; 
        if (windowBottom >= cardTop) {
          newVisible.push(i);
        }
      });

      setVisibleCards(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen p-6 max-w-7xl mx-auto transition-colors duration-700
        ${darkMode ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200" : "bg-gradient-to-br from-blue-600 via-yellow-100 to-blue-50 text-blue-900"}
      `}
    >
      <div className="flex justify-end mb-8">
        <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full border hover:scale-105 transition"
                  >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
      </div>

      <h1 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
        Explore Holiday Packages
      </h1>

      <div className="grid gap-10 md:grid-cols-3">
        {holidayPackages.map((pkg, i) => (
          <div
            key={i}
            className={`holiday-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-700
              ${visibleCards.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
            tabIndex={0}
            role="button"
            aria-label={`Book ${pkg.title} holiday package`}
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="h-56 w-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
              draggable={false}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 dark:text-gray-100">{pkg.title}</h2>
              <p className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 mb-2">
                <MapPin size={20} /> <span>{pkg.location}</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 mb-4">
                <Calendar size={20} /> <span>{pkg.duration}</span>
              </p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-6">{pkg.price}</p>
              <button
                className="bg-blue-600 dark:bg-yellow-400 dark:text-gray-900 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-yellow-300 transition transform hover:scale-105 w-full"
                type="button"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Holidays;
