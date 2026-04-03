import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import Loading from "../Loading/Loading"


const AirportCard = ({ name, iata, icao, latitude, longitude, geoName, timezone, phone, country, countryCode }) => {
  return (
    <>
      <div className='w-full h-[70vh] flex items-center justify-center flex-col'>
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

  // changing the Document Title
  useEffect(() => {
    document.title = "Airport | Flug"
  }, [])

  // state Variables for passing Information
  const [loading, setLoading] = useState(false);
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
  const [inputVal, setInputVal] = useState("");

  let API_KEY = import.meta.env.VITE_API_KEY;


  const url =`https://api.aviationstack.com/v1/airports?iata_code=${inputVal}&access_key=${API_KEY}`;
  const options = { method: 'GET', headers: { Accept: 'application/json' } };



  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      let response = await fetch(url);
      let data = await response.json();
      let airportData = data.data[0];

      setName(airportData.airport_name ? airportData.airport_name : "UNAVAILABLE");
      setIata(airportData.iata_code ? airportData.iata_code : "UNAVAILABLE");
      setIcao(airportData.icao_code ? airportData.icao_code : "UNAVAILABLE");
      setLatitude(airportData.latitude ? airportData.latitude : "UNAVAILABLE");
      setLongitude(airportData.longitude ? airportData.longitude : "UNAVAILABLE");
      setGeoName(airportData.geoname_id ? airportData.geoname_id : "UNAVAILABLE");
      setTimezone(airportData.timezone ? airportData.timezone : "UNAVILABLE");
      setPhone(airportData.phone_number ? airportData.phone_number : "UNAVILABLE");
      setCountry(airportData.country_name ? airportData.country_name : "UNAVAILABLE");
      setCountryCode(airportData.country_iso2 ? airportData.country_iso2 : "UNAVILABLE");
      setFetched(true);
      setLoading(false);




      // To scroll at the bottom most
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    } catch (error) {
      console.log(error);
    }

  }

  const handleAirport = (e) => {
    setInputVal(e.target.value.toUpperCase());
  }

  return (
    <>
      <SearchForm searchBy="Airport Name" placeholder="IATA" handleFormSubmit={handleSubmit} value={inputVal} handleChange={handleAirport} />
      {
        loading ?
          <Loading />
          : ""
      }
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