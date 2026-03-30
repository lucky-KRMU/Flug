import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';

const AirlinesCard = ({ callSign, fleetAge, hub, iata, icao, accNum, name, fleetSize, status, countryCode, foundDate, country }) => {
  return (
    <>
      <p>{ callSign }</p>
      <p>{ fleetAge }</p>
      <p>{ hub }</p>
      <p>{ iata }</p>
      <p>{ icao }</p>
      <p>{ accNum }</p>
      <p>{ name }</p>
      <p>{ fleetSize }</p>
      <p>{ status }</p>
      <p>{ countryCode }</p>
      <p>{ foundDate }</p>
      <p>{ country }</p>
    </>
  );
}


function SearchAirlines() {

  // Definging the State Variables
  const [callSign, setCallSign] = useState("");
  const [fleetAge, setFleetAge] = useState("");
  const [hub, setHub] = useState("");
  const [iata, setIata] = useState("");
  const [icao, setIcao] = useState("");
  const [accNum, setAccNum] = useState("");
  const [name, setName] = useState("");
  const [fleetSize, setFleetSize] = useState("");
  const [status, setStatus] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [foundDate, setFoundDate] = useState("");
  const [country, setCountry] = useState("");


  let url = "../Dummy/dummy_airlines_json.json";

  // function for fetching from api and updating the State/UI
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      let response = await fetch(url);
      let data = await response.json();
      let airlinesData = data.data[0];
      
      // updating the State Variables
      setCallSign(airlinesData.callsign);
      setFleetAge(airlinesData.fleet_average_age);
      setHub(airlinesData.hub_code);
      setIata(airlinesData.iata_code);
      setIcao(airlinesData.icao_code);
      setAccNum(airlinesData.iata_prefix_accounting);
      setName(airlinesData.airline_name);
      setFleetSize(airlinesData.fleet_size);
      setStatus(airlinesData.status);
      setCountryCode(airlinesData.country_iso2);
      setFoundDate(airlinesData.date_founded);
      setCountry(airlinesData.country_name);


    } catch (error) {
      console.log(error);
    }


  }

  return (
    <>
      <div className='h-[70vh] w-full flex items-center justify-center gap-2'>
        <form id='search-flight-num' onSubmit={handleSubmit}>
          <h3 className='text-blue-800 py-2 text-4xl font-semibold font-[Radio_Canada]'>Search By Airlines Name?</h3>
          <div className='h-20 w-100 flex items-center justify-center gap-2'>
            <input type="text" name="flight-num" id="flight-num" placeholder='Enter the Airlines Name Here' className='p-4 bg-blue-50 w-full font-[Radio_Canada] font-semibold text-xl rounded-xl text-blue-950 focus:outline-0' />
            <button type='submit' className='p-4 bg-blue-800 rounded-xl text-white hover:cursor-pointer text-2xl' ><FaMagnifyingGlass /></button>
          </div>
        </form>
      </div>
      <AirlinesCard callSign={callSign} fleetAge={fleetAge} hub={hub} iata={iata} icao={icao} accNum={accNum} name={name} fleetSize={fleetSize} status={status} countryCode={countryCode} foundDate={foundDate} country={country} />
    </>
  )
}

export default SearchAirlines