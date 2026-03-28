import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {

   


   

    
    
    
    
    return(
        <>
        <section className="bg-blue-50 h-[60vh] w-[80vw] rounded-2xl flex justify-evenly items-center">
            <img src="src\assets\Images\plane-globe.png" alt="Plane on a world tour" className="cursor-pointer w-[30vw] hover:-rotate-10 duration-300 hover:scale-[1.1]" />
            <div className="cursor-pointer ">
                <h1 className="text-blue-950 text-6xl font-extrabold font-[Space_Grotesk]">Check Your Status</h1>
                <TypeAnimation className="text-right text-4xl font-semibold text-blue-600 font-[Radio_Canada]" sequence={["Check Your Flights", 100, "Check Airport Status", 100]} wrapper="h3" speed={5} repeat={Infinity}></TypeAnimation>
            </div>
        </section>
        </>
    );
}