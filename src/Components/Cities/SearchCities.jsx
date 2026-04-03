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


    // url
    let url = "https://lucky-krmu.github.io/Flug/Dummy/dummy_cities_json.json"

    // hanldeSubmit method to fetch the data from api
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            setLoading(true);

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

    return (
        <>
            <SearchForm searchBy="City" placeholder="City Name" handleFormSubmit={handleSubmit} />
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