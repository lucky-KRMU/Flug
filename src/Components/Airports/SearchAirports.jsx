import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'



const AirportCard = () => {
  return(
    <>
      <div>

      </div>
    </>
  );
}


function SearchAirports() {

  // state Variables for passing Information
  const [fetched, setFetched] = useState(false);
  const [name, setName] = useState("");
  const [iata, setIata] = useState("");
  const [icao, setIcao] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [geoName, setGeoName] = useState("");
  const [timezone, setTimezone] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  


  let url = "../Dummy/dummy_airport_json.json";

  const handleSubmit =  async (e) => {
   
    e.preventDefault();

    try {
      
      let response = await fetch(url);
      let data = await response.json();
      let airportData = data.data[0];
      console.log(airportData);

    } catch (error) {
      
    }
    
  }



  return (
    <>
      <div className='h-[70vh] w-full flex items-center justify-center gap-2'>
        <form id='search-flight-num' onSubmit={handleSubmit}>
          <h3 className='text-blue-800 py-2 text-4xl font-semibold font-[Radio_Canada]'>Search By Airport Name?</h3>
          <div className='h-20 w-100 flex items-center justify-center gap-2'>
            <input type="text" name="flight-num" id="flight-num" placeholder='Enter the Airport Name Here' className='p-4 bg-blue-50 w-full font-[Radio_Canada] font-semibold text-xl rounded-xl text-blue-950 focus:outline-0' />
            <button type='submit' className='p-4 bg-blue-800 rounded-xl text-white hover:cursor-pointer text-2xl' ><FaMagnifyingGlass /></button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchAirports