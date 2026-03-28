import React from "react";

const Header = () => {

    return (
        <>
            <header className="bg-blue-800 text-white ">
                <nav className="h-[15vh] flex justify-between items-center p-4">
                    <div className="order-1 text-4xl cursor-pointer font-bold font-[Martel_Sans]">Flug</div>
                    <div className="order-2 text-2xl cursor-pointer font-[Radio_Canada]">
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