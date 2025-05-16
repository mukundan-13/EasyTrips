import React, { useRef, useState, useEffect } from "react";
import { Plane,Mountain,Hotel,Bus,Sun,Moon,Star,ChevronLeft,ChevronRight } from 'lucide-react'
import { ThumbsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const services = [
    { title: "Flights", icon: <Plane size={32} />, route: "/flights", bg: "bg-blue-600" },
    { title: "Hotels", icon: <Hotel size={32} />, route: "/hotels", bg: "bg-green-600" },
    { title: "Bus", icon: <Bus size={32} />, route: "/bus", bg: "bg-red-600" },
    { title: "Holidays", icon: <Mountain size={32} />, route: "/holidays", bg: "bg-yellow-500" },
  ];

  const holidayPackages = [
    { city: "Paris", image: "src/assets/paris.jpg", price: "₹85,000", duration: "5 Days 4 Nights" },
    { city: "Bali", image: "src/assets/img.jpg", price: "₹65,000", duration: "7 Days 6 Nights" },
    { city: "Tokyo", image: "src/assets/tokyo.jpg", price: "₹95,000", duration: "6 Days 5 Nights" },
    { city: "New York", image: "src/assets/img2.jpg", price: "₹1,10,000", duration: "5 Days 4 Nights" },
    { city: "Dubai", image: "src/assets/dubai.jpg", price: "₹75,000", duration: "4 Days 3 Nights" },
    { city: "Singapore", image: "src/assets/sinagpore.jpg", price: "₹75,000", duration: "6 Days 5 Nights" },
  ];

  const Ours=[
    { label: "24/7 Support", icon:<ThumbsUp size={20} />, },
    { label: "Best Price Guarantee", icon:<ThumbsUp size={20} />,},
    { label: "Secure Booking", icon:<ThumbsUp size={20} />,},
    { label: "Handpicked Packages", icon:<ThumbsUp size={20} />,}
  ];

  const Reviews=[
    { name: "Rahul",review: "Loved the experience! Everything was top-notch." },
    { name: "Sneha", review: "The best platform for holidays and quick support!" },
    { name: "Arjun", review: "Super smooth process and affordable prices." }
  ];
  const scroll = (dir) => {
    const amount = dir === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className={`transition-colors duration-500 ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold tracking-wide">
            Welcome to <span className="text-blue-500">EasyTrips</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border hover:scale-105 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <p className="text-lg text-center mb-12">Book your next adventure with us</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {services.map((item) => (
            <div
              key={item.title}
              className={`${item.bg} text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer`}
              onClick={() => navigate(item.route)}
            >
              <div className="flex flex-col items-center gap-3">
                {item.icon}
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Best Holiday Packages</h2>
            <div className="flex gap-2">
              <button onClick={() => scroll("left")}
                className={`p-2 rounded-full hover:bg-gray-400 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900 border 2px solid-black"
                }`}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll("right")} className={`p-2 rounded-full hover:bg-gray-400 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900 border 2px solid-black"
                }`}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          >
            {holidayPackages.map((pkg) => (
              <div
                key={pkg}
                className={`min-w-[260px] rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                }`}
              >
                <img src={pkg.image} alt={pkg.city} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{pkg.city}</h3>
                  <p className="text-sm text-text-lg mb-1">{pkg.duration}</p>
                  <p className="text-blue-500 font-semibold">{pkg.price}/person</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Ours.map((item) => (
              <div
                key={item}
                className="bg-blue-600 text-white p-6 rounded-xl shadow hover:scale-105 transition"
              >
                
                <p className="font-semibold text-lg">{item.icon} {item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Reviews.map((r) => (
              <div
                key={r}
                className={`p-6 rounded-xl shadow ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900 border 2px solid-black"
                }`}
              >
                <div className="flex justify-center text-yellow-400 mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} fill="currentColor" size={16} />
                  ))}
                </div>
                <p className="italic">"{r.review}"</p>
                <p className="mt-2 font-semibold text-blue-500">- {r.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
