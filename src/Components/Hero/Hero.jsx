import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {

   


   

    
    
    
    
    return(
        <>
        <section className="bg-blue-50 h-[60vh] w-[80vw] rounded-2xl flex justify-evenly items-center">
            <img src="src\assets\Images\plane-globe.png" alt="Plane on a world tour" className="w-[30vw]" />
            <div>
                <h1 className="text-blue-950 text-5xl font-bold">Check Your Status</h1>
                <TypeAnimation className="text-right text-3xl" sequence={["Check Your Flights", 100, "Check Airport Status", 100]} wrapper="h3" speed={5} repeat={Infinity}></TypeAnimation>
            </div>
        </section>
        </>
    );
}