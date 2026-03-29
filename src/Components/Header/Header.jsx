import React from "react";
import { FaPlaneUp, FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router";

const Header = () => {

    return (
        <>
            <header className="bg-blue-800 text-white ">
                <nav className="h-[15vh] flex justify-between items-center p-4">
                    <div className="order-1 text-4xl cursor-pointer font-bold font-[Martel_Sans] flex gap-2">Flug
                        <FaPlaneUp />
                    </div>
                    <div className="order-2 text-2xl cursor-pointer font-[Radio_Canada]">
                        <ul className="flex gap-2">
                            {/* We will be using end in the navlink to make sure that the navlink will not be active in /search/something like this. */}
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : "text-gray-50"} end>Home</NavLink></li>
                            <li><NavLink to="flights" className={({ isActive }) => isActive ? "font-bold" : "text-gray-50"} end>Flights</NavLink></li>
                            <li><NavLink to="search/" className={({ isActive }) => isActive ? "font-bold" : "text-gray-50"} end>Search</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );

}

export default Header;