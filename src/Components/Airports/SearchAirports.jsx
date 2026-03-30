import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'



const AirportCard = ({ name, iata, icao, latitude, longitude, geoName, timezone, phone, country, countryCode }) => {
  return (
    <>
      <div className='w-full h-70 mb-10 flex items-center justify-center flex-col'>
        <div id="card" className='h-auto w-[80%] p-8 font-[Radio_Canada] border-blue-950 border-4 rounded-xl'>
          <h1 className='text-5xl text-blue-950 font-[Space_Grotesk] font-extrabold'>{name}</h1>
          <h3 className='text-2xl font-semibold text-blue-900'>{iata}</h3>
          <h3 className='text-2xl font-semibold text-blue-900'>{icao}</h3>
          <h2 className='text-2xl font-semibold text-blue-950 py-2'>Details:</h2>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-xl'><span className='font-semibold text-blue-800'>Latitude: </span>{latitude}</p>
              <p className='text-xl'><span className='font-semibold text-blue-800'>Longitude: </span>{longitude}</p>
              <p className='text-xl'><span className='font-semibold text-blue-800'>GeoName: </span>{geoName}</p>
            </div>
            <div className='text-right'>
              <p> <span className='font-semibold text-blue-800'>Time Zone: </span>{timezone}</p>
              <h3 className='text-2xl'><span className='font-semibold text-blue-800'>Telephone: </span>{phone}</h3>
              <h3 className='text-3xl font-semibold text-blue-900'>{country}</h3>
              <p className='text-xl font-semibold'>{countryCode}</p>
            </div>
          </div>
        </div>
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
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");



  let url = "../Dummy/dummy_airport_json.json";

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      let response = await fetch(url);
      let data = await response.json();
      let airportData = data.data[0];

      setName(airportData.airport_name);
      setIata(airportData.iata_code);
      setIcao(airportData.icao_code);
      setLatitude(airportData.latitude);
      setLongitude(airportData.longitude);
      setGeoName(airportData.geoname_id);
      setTimezone(airportData.timezone);
      setPhone(airportData.phone_number);
      setCountry(airportData.country_name);
      setCountryCode(airportData.country_iso2);
      setFetched(true);

    } catch (error) {
      console.log(error);
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
      {
        fetched ?
        <AirportCard name={name} iata={iata} icao={icao} latitude={latitude} longitude={longitude} geoName={geoName} timezone={timezone} phone={phone} country={country} countryCode={countryCode} />
        :
        ""
      }
    </>
  )
}

export default SearchAirports