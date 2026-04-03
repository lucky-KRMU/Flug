import React, { useState, useEffect } from 'react'
import { FaPlane } from 'react-icons/fa6'
import SearchForm from '../SearchForm/SearchForm';
import Loading from "../Loading/Loading"

const FlightInfo = ({ flightDate, flightStatus, depAirport, depAirportIATA, depTime, depActualTime, arrAirport, arrAirportIATA, arrTime, arrActualTime, flightNumber, airline, aircraftRegistration, aircraftICAO, liveLatitude, liveLongitude, altitude, direction, speed, landed }) => {

  return (
    <>
      <div className='h-auto w-full flex flex-col justify-center items-center '>
        <div className='border-4 my-5 w-[80vw] p-10 border-blue-950 rounded-xl font-[Radio_Canada]'>
          <h1 className='text-6xl  text-blue-950 font-[Space_Grotesk] font-bold'>{airline}</h1>
          <h2 className='text-3xl text-blue-900 font-[Radio_Canada] font-semibold'>{flightNumber}</h2>
          <div id="date-card" className='flex justify-between text-xl'>
            <p className='text-blue-900 font-semibold order-2'>{flightDate}</p>
            <p className="order-1 font-semibold" >{flightStatus}</p>
          </div>
          <div id="airportCard" className='flex md:flex-row justify-between items-center my-3 flex-col'>
            <div id="depCard">
              <h2 className='text-left text-5xl font-bold text-blue-900'>{depAirportIATA}</h2>
              <h3 className='text-left text-xl font-semibold'>{depAirport}</h3>
              <div id="arrTime">
                <h4 className='text-l font-semibold'>Scheduled Date & Time of Departure:</h4>
                <div className='flex justify-between items-center'>
                  <p className='text-left text-l text-blue-900 font-bold'>{depTime.split('T')[0]}</p>
                  <p className='text-left text-blue-900 font-semibold'>{depTime.split('T')[1].split('+')[0]}</p>
                </div>
              </div>
              <div id="arrActualTime">
                <h4 className='text-l font-semibold'>Actual Date & Time of Departure:</h4>
                <div className='flex justify-between items-center'>
                  <p className='text-left text-l text-blue-900 font-bold'>{depActualTime.split('T')[0]}</p>
                  <p className='text-left text-blue-900 font-semibold'>{depActualTime.split('T')[1].split('+')[0]}</p>
                </div>
              </div>
            </div>
            <FaPlane className='text-5xl cursor-pointer text-blue-900 hover:text-blue-950 duration-300 ease-in-out hover:scale-[1.1]' />
            <div id="arrCard">
              <h2 className='text-right text-5xl font-bold text-blue-900'>{arrAirportIATA}</h2>
              <h3 className='text-right text-xl font-semibold'>{arrAirport}</h3>
              <div id="arrTime">
                <h4 className='text-l font-semibold'>Scheduled Date & Time of Arrival:</h4>
                <div className='flex justify-between items-center'>
                  <p className='text-right text-l text-blue-900 font-bold'>{arrTime.split('T')[0]}</p>
                  <p className='text-right text-blue-900 font-semibold'>{arrTime.split('T')[1].split('+')[0]}</p>
                </div>
              </div>
              <div id="arrActualTime">
                <h4 className='text-l font-semibold'>Estimated Date & Time of Arrival:</h4>
                <div className='flex justify-between items-center'>
                  <p className='text-right text-l text-blue-900 font-bold'>{arrActualTime.split('T')[0]}</p>
                  <p className='text-right text-blue-900 font-semibold'>{arrActualTime.split('T')[1].split('+')[0]}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="aircraftDetails" className=' my-5'>
            <h4 className='text-xl font-semibold text-blue-950'>Aircraft Details: </h4>
            <p><span className='font-semibold text-blue-900'>Registration:</span> {aircraftRegistration}</p>
            <p><span className='font-semibold text-blue-900'>ICAO:</span> {aircraftICAO}</p>
          </div>
          <div id="liveDetails">
            <h4 className='text-xl font-semibold text-blue-950'>Live Aircraft Details: </h4>
            <p><span className='font-semibold text-blue-900'>Latitude:</span> {liveLatitude}</p>
            <p><span className='font-semibold text-blue-900'>Longitude:</span> {liveLongitude}</p>
            <p><span className='font-semibold text-blue-900'>Altitude:</span> {altitude}</p>
            <p><span className='font-semibold text-blue-900'>Direction:</span> {direction}</p>
            <p><span className='font-semibold text-blue-900'>Speed:</span> {speed} knots</p>
          </div>
          {
            landed ?
              <p className='text-2xl text-center font-bold text-green-500 my-2 animate-pulse'>Landed</p>
              :
              <p className='text-2xl text-center font-bold my-2 text-blue-500 animate-pulse'>Airborne</p>
          }
        </div>
      </div>
    </>
  );
}


function SearchFlights() {

  // State functions(variables) required
  const [loading, setLoading] = useState(false);
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
  const [landed, setLanded] = useState(false);

  let url = "https://lucky-krmu.github.io/Flug/Dummy/dummy_flight_search_json.json";

  /*
  We just encountered the bug:
  The bug was that the handleGetData function was throwing an error, and this error was becaues of 
  parsing something that isn't json at all.
  in our code, it wasn't able to fetch the original file.
  So, vite server threw the main react html bundle page itself.
  This is known as SPA Fallback -> (Single page application fallback)
  So, frontend doesn't throw error but something else instead of it.
  */

  // changing the Document Title
  useEffect(() => {
    document.title = "Aircraft Type | Flug"
  }, [])

  const handleGetData = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);

      let data = await fetch(url);
      let response = await data.json();
      let flightData = response.data[0];



      // auxiliary variables
      let departure = flightData.departure;
      let arrival = flightData.arrival;
      let live = flightData.live;

      // Updating the states
      setFlightDate(flightData.flight_date);
      setFlightStatus(flightData.flight_status);
      setDepAirport(departure.airport);
      setDepAirportIATA(departure.iata);
      setDepTime(departure.scheduled);
      setDepActualTime(departure.actual);
      setArrAirport(arrival.airport);
      setArrAirportIATA(arrival.iata);
      setArrTime(arrival.scheduled);
      setArrActualTime(arrival.estimated);
      setAirline(flightData.airline.name);
      setFlightNumber(flightData.flight.iata);
      setAircraftRegistration(flightData.aircraft.registration);
      setAircraftICAO(flightData.aircraft.icao);
      setLiveLatitude(live.latitude);
      setLiveLongitude(live.longitude);
      setAltitude(live.altitude);
      setDirection(live.direction);
      setSpeed(live.speed_horizontal);
      setLanded(live.is_ground);
      setDataFetched(true);
      setLoading(false);



      // To scroll at the bottom most
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });

    }
    catch (err) {
      console.log(err);
    }


  }


  return (
    <>
      <SearchForm searchBy="Flight Name" placeholder="Flight number" handleFormSubmit={handleGetData} />
      {
        loading ?
          <Loading />
          : ""
      }
      {
        dataFetched ?
          <FlightInfo flightDate={flightDate} flightNumber={flightNumber} flightStatus={flightStatus} depAirport={depAirport} depAirportIATA={depAirportIATA} depTime={depTime} depActualTime={depActualTime} arrAirport={arrAirport} arrAirportIATA={arrAirportIATA} arrTime={arrTime} arrActualTime={arrActualTime} airline={airline} aircraftRegistration={aircraftRegistration} aircraftICAO={aircraftICAO} liveLatitude={liveLatitude} liveLongitude={liveLongitude} altitude={altitude} direction={direction} speed={speed} landed={landed} />
          :
          ""
      }
    </>
  )
}

export default SearchFlights;