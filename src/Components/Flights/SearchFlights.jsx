import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const FlightInfo = () => {
  return(
    <>
    
    </>
  );
}


function SearchFlights() {

  // State functions(variables) required
  const [dataFetched, setDataFetched] = useState(false);
  const [flightDate, setFlightDate] = useState("");
  const [flightStatus, setFlightStatus] = useState("");
  const [depAirport, setDepAirport] = useState("");
  const [depAirportIATA, setDepAirportIATA] = useState("");
  const [depTime, setDepTime] = useState("");
  const [depActualTime, setDepActualTime] = useState("");
  const [arrAirport, setArrAirport] = useState("");
  const [arrAirportIATA, setArrAirportIATA] = useState("");
  const [arrTime, setArrTime] = useState("");
  const [arrActualTime, setArrActualTime] = useState("");
  const [airline, setAirline] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [aircraftRegistration, setAircraftRegistration] = useState("");
  const [aircraftICAO, setAircraftICAO] = useState("");
  const [liveLatitude, setLiveLatitude] = useState("");
  const [liveLongitude, setLiveLongitude] = useState("");
  const [altitude, setAltitude] = useState("");
  const [direction, setDirection] = useState("");
  const [speed, setSpeed] = useState("");
  const [landed, setLanded] = useState("");


  return (
    <>
    <div className='h-[70vh] w-full flex items-center justify-center gap-2'>
        <form id='search-flight-num'>
        <h3 className='text-blue-800 py-2 text-4xl font-semibold font-[Radio_Canada]'>Search By Flight Number?</h3>
        <div className='h-20 w-100 flex items-center justify-center gap-2'>
            <input type="text" name="flight-num" id="flight-num" placeholder='Enter the Flight Number Here' className='p-4 bg-blue-50 w-full font-[Radio_Canada] font-semibold text-xl rounded-xl text-blue-950 focus:outline-0'/>
            <button type="submit" className='p-4 bg-blue-800 rounded-xl text-white hover:cursor-pointer text-2xl'><FaMagnifyingGlass/></button>
        </div>
        </form>
    </div>
    </>
  )
}

export default SearchFlights;