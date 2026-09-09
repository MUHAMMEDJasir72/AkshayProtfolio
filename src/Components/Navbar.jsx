import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Let's Connect", path: "/contact" },
  ];

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
      <nav className="max-w-[600px] mx-auto bg-[#0f172a]/90 backdrop-blur border border-indigo-500/30 rounded-md shadow-md px-6 py-3">
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-14">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className={`transition duration-200 text-base sm:text-lg ${
                  location.pathname === item.path
                    ? "text-pink-400"
                    : "text-white hover:text-pink-300"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
