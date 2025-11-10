import { Link } from "react-router";
import { useState, useEffect } from "react";
import { MobileHeaderMenu } from "~/components/mobile-header-menu";
import Logo from "~/img/logo.png";
import PachonLogo from "./PachonLogo";
import PachonIcon from "./PachonIcon";

const navMenu = [
  {
    name: "Menu",
    url: "/#menu",
  },
  {
    name: "Access",
    url: "/#access",
  },
  {
    name: "Chef",
    url: "/#chef",
  },
  {
    name: "History",
    url: "/#url",
  },
  {
    name: "Calendar",
    url: "/calendar",
  },
];

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
      className={`fixed top-0 left-0 right-0 z-30 transition-all ease-in-out duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-12 sm:h-16">
        <Link
          to="/"
          className={`flex flex-row space-x-2 sm:space-x-4 items-center transition-all duration-1000 ${
            scrolled ? "text-gray-600 fill-gray-600" : "text-white fill-white"
          }`}
        >
          <div className="w-8 sm:w-12">
            <PachonIcon showShadow={!scrolled} />
          </div>
          <div className="w-24 sm:w-40">
            <PachonLogo showShadow={!scrolled} />
          </div>
        </Link>
        <nav>
          <ul className="hidden sm:flex space-x-6">
            {navMenu.map((item) => (
              <li key={item.name}>
                <Link
                  to={`${item.url}`}
                  className={`group relative text-shadow-lg text-shadow-stone-900 px-2 py-1
            transition-all duration-500 ${
              scrolled ? "text-gray-600 text-shadow-none" : "text-white"
            }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-gray-600" : "bg-white"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="block sm:hidden">
            <MobileHeaderMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
