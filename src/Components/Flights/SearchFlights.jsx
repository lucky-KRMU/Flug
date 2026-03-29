import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const FlightInfo = () => {
  return (
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

  let url = "../dummy_flight_search_json.json";

  /*
  We just encountered the bug:
  The bug was that the handleGetData function was throwing an error, and this error was becaues of 
  parsing something that isn't json at all.
  in our code, it wasn't able to fetch the original file.
  So, vite server threw the main react html bundle page itself.
  This is known as SPA Fallback -> (Single page application fallback)
  So, frontend doesn't throw error but something else instead of it.
  */

  const handleGetData = async () => {

    try {
      let data = await fetch(url);
      let response = await data.json();
      let flightData = response.data;
      console.log(response);
      console.log("hi")
    }
    catch (err) {
      console.log(err);
    }

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <>
      <div className='h-[70vh] w-full flex items-center justify-center gap-2'>
        <form id='search-flight-num' onSubmit={handleFormSubmit}>
          <h3 className='text-blue-800 py-2 text-4xl font-semibold font-[Radio_Canada]'>Search By Flight Number?</h3>
          <div className='h-20 w-100 flex items-center justify-center gap-2'>
            <input type="text" name="flight-num" id="flight-num" placeholder='Enter the Flight Number Here' className='p-4 bg-blue-50 w-full font-[Radio_Canada] font-semibold text-xl rounded-xl text-blue-950 focus:outline-0' />
            <button type='submit' className='p-4 bg-blue-800 rounded-xl text-white hover:cursor-pointer text-2xl' onClick={handleGetData}><FaMagnifyingGlass /></button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchFlights;