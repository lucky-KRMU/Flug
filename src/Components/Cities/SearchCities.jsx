import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Loading from "../Loading/Loading"

const CityCard = ({ gmt, iata, country, geoname, latitude, longitude, name, timeZone }) => {
    return (
        <>
            <div className='h-[50vh] w-full flex items-center justify-center my-10 font-[Radio_Canada]'>
                <div className='w-[80%] h-full flex flex-col justify-between text-xl  border-4 border-blue-950 rounded-xl p-5'>
                    <h1 className='text-6xl font-[Space_Grotesk] font-semibold text-blue-950 m-3'>{name}</h1>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p><span className='text-blue-800 font-semibold'>IATA: </span>{iata}</p>
                            <p><span className='text-blue-800 font-semibold'>Country: </span>{country}</p>
                            <p><span className='text-blue-800 font-semibold'>Geoname: </span>{geoname}</p>
                        </div>
                        <div>
                            <p><span className='text-blue-800 font-semibold'>Latitude: </span>{latitude}</p>
                            <p><span className='text-blue-800 font-semibold'>Longitude: </span>{longitude}</p>
                        </div>
                    </div>
                    <div>
                        <p><span className='text-blue-800 font-semibold'>GMT: </span>{gmt}</p>
                        <p><span className='text-blue-800 font-semibold'>Time Zone: </span>{timeZone}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

function SearchCities() {

    // changing the Document Title
    useEffect(() => {
        document.title = "City | Flug"
    }, [])

    // Necessary state variables
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [gmt, setGmt] = useState("");
    const [iata, setIata] = useState("");
    const [country, setCountry] = useState("");
    const [geoname, setGeoname] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [name, setName] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [inputVal, setInputVal] = useState("");

    let API_KEY = import.meta.env.VITE_API_KEY;

    // url
    let url = `https://api.aviationstack.com/v1/cities?iata_code=${inputVal}&access_key=${API_KEY}`;
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    // hanldeSubmit method to fetch the data from api
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            setLoading(true);

            let response = await fetch(url, options);
            let data = await response.json();
            let cityData = data.data[0];

            console.log(cityData);

            setGmt(cityData.gmt ? cityData.gmt : "UNAVAILABLE");
            setIata(cityData.iata_code ? cityData.iata_code : "UNAVAILABLE");
            setCountry(cityData.country_iso2 ? cityData.country_iso2 : "UNAVAILABLE");
            setGeoname(cityData.geoname_id ? cityData.geoname_id : "UNAVAILABLE");
            setLatitude(cityData.latitude ? cityData.latitude : "UNAVAILABLE");
            setLongitude(cityData.longitude ? cityData.longitude : "UNAVAILABLE");
            setName(cityData.city_name ? cityData.city_name : "UNAVAILABLE");
            setTimeZone(cityData.timezone ? cityData.timezone : "UNAVAILABLE");
            setFetched(true);
            setLoading(false);


            // To scroll at the bottom most
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        } catch (err) {
            console.log(err)
        }

    }


    const handleCity = (e) => {
        setInputVal(e.target.value.toUpperCase())
    }

    return (
        <>
            <SearchForm searchBy="City" placeholder="City IATA" handleFormSubmit={handleSubmit} value={inputVal} handleChange={handleCity} />
            {
                loading ?
                    <Loading />
                    : ""
            }
            {
                fetched ?
                    <CityCard gmt={gmt} iata={iata} country={country} geoname={geoname} latitude={latitude} longitude={longitude} name={name} timeZone={timeZone} />
                    : ""
            }
        </>
    )
}

export default SearchCities