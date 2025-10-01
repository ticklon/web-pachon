import { Link } from "react-router";
import { useState, useEffect } from "react";
import { MobileHeaderMenu } from "~/components/mobile-header-menu";
import Logo from "~/img/logo.png";

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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-500 ${scrolled ? "bg-white shadow-md"
            : "bg-transparent"}`}>
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <Link to="/" className={`flex flex-row space-x-5 font-semibold items-center text-xl ${scrolled ? "text-gray-800"
                    : "text-white"}`}>
                    <div className="w-12 sm:w-16">
                        <img src={Logo} alt="" />
                    </div>
                    <span>PACHON</span>
                </Link>
                <nav>
                    <ul className="hidden sm:flex space-x-6">
                        {["Menu", "Concept", "Access", "Chef", "History"].map((item) => (
                            <li key={item}>
                                <Link to={`/${item.toLowerCase()}`} className={`hover:bg-white/50 hover:text-red-800 hover:text-shadow-none text-shadow-lg text-shadow-stone-900 px-2 py-1 rounded-full transition-all duration-300 ${scrolled
                                    ? "text-gray-600 text-shadow-none" : "text-white"}`}>
                                    {item}
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
