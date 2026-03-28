import React, {useState} from 'react'
import { FaPlane } from 'react-icons/fa';


function FlightCard({ AirLines, IATA, FROM, TO, FROM_TITLE, TO_TITLE, LandingStatus }) {
    return (
        <>
            <div className='h-auto w-70 p-5 m-2 rounded-2xl border-4 cursor-pointer'>
                <h1 className='text-4xl py-1 text-blue-950 font-[Space_Grotesk] font-semibold'>{AirLines}</h1>
                <h2 className='text-2xl text-blue-900 font-[Radio_Canada] font-semibold'>{IATA}</h2>
                <div className='text-xl py-3 h-8 w-full flex justify-between align-center text-blue-900 font-[Radio_Canada] font-semibold'>
                    <p title={FROM_TITLE} className='hover:font-bold hover:scale-[1.05] transition-200 ease-in-out'>{FROM}</p>
                    <FaPlane className='translate-y-1 hover:scale-[2] transition-300 ease-in-out'/>
                    <p title={TO_TITLE} className='hover:font-bold hover:scale-[1.05] transition-200 ease-in-out'>{TO}</p>
                </div>
                <p className={`text-xl animate-pulse font-semibold font-[Radio_Canada] text-center translate-y-3 ${(LandingStatus) ? "text-green-500" : "text-red-500" }`}>Landed</p>
            </div>
        </>
    );
}


function Flights() {

    let [airLines, setAirLines] = useState("");
    let [iata, setIata] = useState("");
    let [from, setFrom] = useState("");
    let [to, setTo] = useState("");

    let url = "dummy_flight_json.json";

    const getFlightData = async () => {
        let data = await fetch(url);
        let response = await data.json();
        let flightData = response.data;
        console.log(flightData);
        let newData = flightData[0];
        console.log(newData.departure.iata);
        setAirLines(newData.airline.name);
        setIata(newData.flight.iata);
        setFrom(newData.departure.iata);
        setTo(newData.arrival.iata);
    }


    return (
        <>
            <div className='w-full'>
                <FlightCard AirLines={airLines} IATA={iata} FROM={from} TO={to} LandingStatus={true} FROM_TITLE="Indira Gandhi International Airport" TO_TITLE="Dubai International Airport" />
                <button onClick={getFlightData} className='m-5 p-4 bg-red-500 text-2xl text-white font-bold rounded-2xl cursor-pointer'>Get</button>
            </div>
        </>
    )
}

export default Flights