import React, {useState, useEffect} from 'react'
import { FaPlane, FaPlaneDeparture } from 'react-icons/fa';


function FlightCard({ AirLines, IATA, FROM, TO, FROM_TITLE, TO_TITLE, LandingStatus }) {
    return (
        <>
            <div className='h-auto w-70 p-5 m-2 rounded-2xl border-4 cursor-pointer hover:scale-[1.1] duration-200 ease-in-out'>
                <h1 className='text-4xl py-1 text-blue-950 font-[Space_Grotesk] font-semibold'>{AirLines}</h1>
                <h2 className='text-2xl text-blue-900 font-[Radio_Canada] font-semibold'>{IATA}</h2>
                <div className='text-xl py-3 h-8 w-full flex justify-between align-center text-blue-900 font-[Radio_Canada] font-semibold'>
                    <p title={FROM_TITLE} className='hover:font-bold hover:scale-[1.05] transition-200 ease-in-out'>{FROM}</p>
                    <FaPlane className='translate-y-1 hover:scale-[2] transition-300 ease-in-out'/>
                    <p title={TO_TITLE} className='hover:font-bold hover:scale-[1.05] transition-200 ease-in-out'>{TO}</p>
                </div>
                <p className={`text-xl animate-pulse font-semibold font-[Radio_Canada] text-center translate-y-3 ${(LandingStatus) ? "text-green-500" : "text-red-500" }`}>{LandingStatus ? "Landed" : "In Air" }</p>
            </div>
        </>
    );
}


function Flights() {

    let [data, setData] = useState([]);

    let url = "Dummy/dummy_flight_json.json";

    useEffect(  () => {
        // Earlier we were using this async function diretly in the callback function of use effect, But it's a bad practice. Because
        // The useEffect hook expects and considers a promise as a function that would be used in return that would run after everything is done. Hence, This approach is used for the safety and best practices. the earlier would have considered it as a return and would have re-rendered it several times.
        // this exact thing was giving the  error of destroy is not a function in react router
       const loadData =  async ()=>{
            let data = await fetch(url);
            let response = await data.json();
            let flightData = response.data;
            setData(flightData);
            console.log(flightData);
        }
        loadData();
    }, []); // also we earlier used data in the dependency array but no, we don't have to use it as it would be updated again and again, and so it would be re-rendered again and again. 


    return (
        <>
            <h2 className='text-3xl py-4 w-full h-30  text-blue-950 font-bold font-[Radio_Canada] flex items-center justify-center gap-4 cursor-pointer'>Live Flights Data<FaPlaneDeparture className='hover:scale-125' /></h2>
            <div className='w-full h-auto flex justify-center items-center '>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {data.map((data, key)=>{    // fix key issue in map function
                    return <FlightCard key={key} AirLines={data.airline.name} IATA={data.flight.iata} FROM={data.departure.iata} FROM_TITLE={data.departure.airport} TO={data.arrival.iata} TO_TITLE={data.arrival.airport} LandingStatus={data.live.is_ground}/>
                })}
               
                </div>
            </div>
        </>
    )
}

export default Flights