import React from "react";

const Header = () => {

    return (
        <>
            <header className="bg-blue-800 text-white">
                <nav className="flex justify-between p-4">
                    <div className="order-1 text-4xl cursor-pointer">Flug</div>
                    <div className="order-2 text-2xl cursor-pointer">
                        <ul className="flex gap-2">
                            <li>Home</li>
                            <li>Airport</li>
                            <li>Flights</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );

}

export default Header;