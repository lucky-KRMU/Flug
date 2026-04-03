import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Plane from "../../assets/Images/flug-plane.png"

export default function Hero() {

    // changing the Document Title
    useEffect(() => {
        document.title = "Flug"
    }, [])








    return (
        <>
            <div className="h-[70vh] w-full flex justify-center items-center">
                <section className="bg-blue-50 h-[60vh] w-[80vw] rounded-2xl flex flex-col justify-evenly items-center md:flex-row sm:p-10">
                    <img src={Plane} alt="Plane on a world tour" className="cursor-pointer md:w-[30vw] hover:-rotate-10 duration-300 hover:scale-[1.1] sm:w-[50vw]" />
                    <div className="cursor-pointer ">
                        <h1 className="text-blue-950 text-6xl font-extrabold font-[Space_Grotesk] sm:text-center">Status? Just Flug It.</h1>
                        <TypeAnimation className="md:text-right md:text-4xl font-semibold text-blue-600 font-[Radio_Canada] sm:text-3xl" sequence={[
                            "Check Your Flights", 100,
                            "Check Airport Status", 100,
                            "Check Your Airlines", 100,
                            "Check Awesome Airplanes", 100,
                            "Check Aircrafts Types", 100,
                            "Check City Status", 100,
                            "Check Country Status", 100
                        ]} wrapper="h3" speed={5} repeat={Infinity}></TypeAnimation>
                    </div>
                </section>
            </div>
        </>
    );
}