import { useState, useEffect } from "react";
import { Bus, Clock, Ticket, Search, Sun, Moon } from "lucide-react";

function Buses() {
  const [animate, setAnimate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const busRoutes = [
    {
      route: "Delhi → Jaipur",
      price: "₹650",
      departure: "06:00 AM",
      busName: "Volvo Express",
      rating: 4.7,
    },
    {
      route: "Mumbai → Pune",
      price: "₹400",
      departure: "08:30 AM",
      busName: "RedBus Deluxe",
      rating: 4.5,
    },
    {
      route: "Chennai → Bangalore",
      price: "₹750",
      departure: "09:00 PM",
      busName: "KSRTC Luxury",
      rating: 4.6,
    },
    {
      route: "Kolkata → Darjeeling",
      price: "₹900",
      departure: "05:30 AM",
      busName: "Mountain Travels",
      rating: 4.8,
    },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);
  const filteredRoutes = busRoutes.filter((r) =>
    r.route.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div
      className={`max-w-5xl mx-auto p-6 min-h-screen transition-colors duration-700 ${
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

      <h1 className="text-4xl font-extrabold text-center mb-10">
        Book Your Bus Ride
      </h1>
      <div className="flex justify-center mb-12 space-x-4">
        <div
          className={`flex items-center space-x-2 p-3 rounded-lg shadow-md border transition-all duration-500 ${
            darkMode
              ? "border-blue-600 bg-blue-900"
              : "border-blue-300 bg-yellow-100"
          } ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <Search
            className={darkMode ? "text-blue-300" : "text-blue-700"}
            size={20}
          />
          <input
            type="text"
            placeholder="Search route (e.g., Delhi → Jaipur)"
            className={`bg-transparent focus:outline-none placeholder-opacity-70 w-72 ${
              darkMode ? "placeholder-blue-300 text-blue-200" : "placeholder-blue-600 text-blue-900"
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-6">
        {filteredRoutes.length === 0 && (
          <p
            className={`text-center font-medium ${
              darkMode ? "text-blue-300" : "text-blue-800"
            }`}
          >
            No routes found.
          </p>
        )}

        {filteredRoutes.map((route, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center justify-between p-5 rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="flex items-center space-x-4 mb-3 md:mb-0">
              <Bus
                size={32}
                className={darkMode ? "text-blue-300 flex-shrink-0" : "text-blue-600 flex-shrink-0"}
              />
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-blue-200" : "text-blue-800"
                  }`}
                >
                  {route.route}
                </h3>
                <p className={darkMode ? "text-blue-300 font-medium" : "text-blue-700 font-medium"}>
                  {route.busName}
                </p>
              </div>
            </div>

            <div
              className={`flex items-center space-x-6 font-semibold ${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              <div className="flex items-center space-x-1">
                <Clock size={20} />
                <span>{route.departure}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Ticket size={20} />
                <span>{route.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buses;
