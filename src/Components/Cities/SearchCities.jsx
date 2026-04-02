import React, { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'

const CityCard = ({ gmt, iata, country, geoname, latitude, longitude, name, timeZone }) => {
    return (
        <>
        <p>{gmt}</p>
        <p>{iata}</p>
        <p>{country}</p>
        <p>{geoname}</p>
        <p>{latitude}</p>
        <p>{longitude}</p>
        <p>{name}</p>
        <p>{timeZone}</p>
        </>
    );
}

function SearchCities() {

    // Necessary state variables
    const [gmt, setGmt] = useState("");
    const [iata, setIata] = useState("");
    const [country, setCountry] = useState("");
    const [geoname, setGeoname] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [name, setName] = useState("");
    const [timeZone, setTimeZone] = useState("");


    // url
    let url = "../Dummy/dummy_cities_json.json"

    // hanldeSubmit method to fetch the data from api
    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await fetch(url);
        let data = await response.json();
        let cityData = data.data[0];

        console.log(cityData);

        setGmt(cityData.gmt);
        setIata(cityData.iata_code);
        setCountry(cityData.country_iso2);
        setGeoname(cityData.geoname_id);
        setLatitude(cityData.latitude);
        setLongitude(cityData.longitude);
        setName(cityData.city_name);
        setTimeZone(cityData.timezone);

        
    }

    return (
        <>
            <SearchForm searchBy="City" placeholder="City Name" handleFormSubmit={handleSubmit} />
            <CityCard gmt={gmt} iata={iata} country={country} geoname={geoname} latitude={latitude} longitude={longitude} name={name} timeZone={timeZone} />
        </>
    )
}

export default SearchCities