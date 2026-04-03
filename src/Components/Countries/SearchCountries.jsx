import React, { useState, useEffect } from 'react'
import SearchForm from "../SearchForm/SearchForm"
import Loading from "../Loading/Loading"


const CountryCard = ({ capital, currCode, fips, countryIso, continent, country, currency, iso, phonePrefix, population }) => {
    return (
        <>
            <div className='w-full h-auto flex items-center justify-center my-5'>
                <div className='w-[80%] font-[Radio_Canada] text-xl h-full flex flex-col items-center justify-between gap-10 p-10 border-4 rounded-xl border-blue-950'>
                    <h1 className='text-6xl text-blue-950 font-semibold font-[Space_Grotesk]'>{country}</h1>
                    <div className='w-full h-auto flex justify-between items-center'>
                        <div className=''>
                            <p><span className='text-xl font-semibold text-blue-800'>Capital: </span>{capital}</p>
                            <p><span className='text-xl font-semibold text-blue-800'>Continent: </span>{continent}</p>
                        </div>
                        <div className='flex flex-col justify-end items-end'>
                            <p><span className='text-xl font-semibold text-blue-800'>FIPS Code: </span>{fips}</p>
                            <p><span className='text-xl font-semibold text-blue-800'>Country ISO(3): </span>{countryIso}</p>
                        </div>
                    </div>
                    <div className='w-full h-auto flex justify-between items-center'>
                        <div className=''>
                            <p><span className='text-xl font-semibold text-blue-800'>Phone Prefix: </span>{phonePrefix}</p>
                            <p><span className='text-xl font-semibold text-blue-800'>ISO (Numeric): </span>{iso}</p>
                            <h3><span className='text-xl font-semibold text-blue-800'>Population: </span>{population}</h3>
                        </div>
                        <div className='flex flex-col justify-end items-end'>
                            <p><span className='text-xl font-semibold text-blue-800'>Currency: </span>{currency}</p>
                            <p><span className='text-xl font-semibold text-blue-800'>Currency Code: </span>{currCode}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function SearchCountries() {

    // changing the Document Title
    useEffect(() => {
        document.title = "Country | Flug"
    }, [])

    // Necessary State Variables
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [capital, setCapital] = useState("");
    const [currCode, setCurrCode] = useState("");
    const [fips, setFips] = useState("");
    const [countryIso, setCountryIso] = useState("");
    const [continent, setContinent] = useState("");
    const [country, setCountry] = useState("");
    const [currency, setCurrency] = useState("");
    const [iso, setIso] = useState("");
    const [phonePrefix, setPhonePrefix] = useState("");
    const [population, setPopulation] = useState(0);


    // url
    let url = "../Dummy/dummy_countries_json.json"

    // handle Submit function to search for the country
    const handleSubmit = async (e) => {
        // to prevent default reload
        e.preventDefault();

        try {

            setLoading(true);

            let response = await fetch(url);
            let data = await response.json();

            let countryData = data.data[0];

            // updating the state
            setCapital(countryData.capital);
            setCurrCode(countryData.currency_code);
            setFips(countryData.fips_code);
            setCountryIso(countryData.country_iso3);
            setContinent(countryData.continent);
            setCountry(countryData.country_name);
            setCurrency(countryData.currency_name);
            setIso(countryData.country_iso_numeric);
            setPhonePrefix(countryData.phone_prefix);
            setPopulation(JSON.parse(countryData.population));
            setFetched(true);
            setLoading(false);



            // To scroll at the bottom most
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });

        } catch (err) {
            console.log(err);
        }




    }

    return (
        <>
            <SearchForm searchBy="Country" placeholder="Country name" handleFormSubmit={handleSubmit} />
            {
                loading ?
                    <Loading />
                    : ""
            }
            {
                fetched ?
                    <CountryCard capital={capital} currCode={currCode} fips={fips} countryIso={countryIso} continent={continent} country={country} currency={currency} iso={iso} phonePrefix={phonePrefix} population={population.toLocaleString('en-US')} />
                    : ""
            }

        </>
    )
}

export default SearchCountries