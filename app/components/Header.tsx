import { Link } from "react-router";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link to="/" className={`font-bold text-xl ${scrolled ? "text-gray-800" : "text-white"}`}>
          PACHON
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {["Menu", "Concept", "Access", "Chef", "History"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`hover:text-red-800 transition ${
                    scrolled ? "text-gray-600" : "text-white"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
