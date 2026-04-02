import React, { useState } from 'react'
import SearchForm from "../SearchForm/SearchForm"


const CountryCard = ({capital, currCode, fips, countryIso, continent, country, currency, iso, phonePrefix, population}) => {
    return (
        <>
        <p>{capital}</p>
        <p>{currCode}</p>
        <p>{fips}</p>
        <p>{countryIso}</p>
        <p>{continent}</p>
        <p>{country}</p>
        <p>{currency}</p>
        <p>{iso}</p>
        <p>{phonePrefix}</p>
        <p>{population}</p>
        </>
    );
}


function SearchCountries() {
    
    // Necessary State Variables
    const [capital, setCapital] = useState("");
    const [currCode, setCurrCode] = useState("");
    const [fips, setFips] = useState("");
    const [countryIso, setCountryIso] = useState("");
    const [continent, setContinent] = useState("");
    const [country, setCountry] = useState("");
    const [currency, setCurrency] = useState("");
    const [iso, setIso] = useState("");
    const [phonePrefix, setPhonePrefix] = useState("");
    const [population, setPopulation] = useState("");


    // url
    let url = "../Dummy/dummy_countries_json.json" 

    // handle Submit function to search for the country
    const handleSubmit = async (e) => {
        // to prevent default reload
        e.preventDefault();

        try {
            let response = await fetch(url);
            let data = await response.json();

            let countryData = data.data[0];
            
            // updating the state
            setCapital(countryData.capital);
            setCurrCode(countryData.currency_code);
            setFips(countryData.fips);
            setCountryIso(countryData.country_iso3);
            setContinent(countryData.continent);
            setCountry(countryData.country);
            setCurrency(countryData.currency_name);
            setIso(countryData.country_iso_numeric);
            setPhonePrefix(countryData.phone_prefix);
            setPopulation(countryData.population);

        } catch (err) {
            console.log(err);
        }




    }

  return (
    <>
    <SearchForm searchBy="Country" placeholder="Country name" handleFormSubmit={handleSubmit} />

    <CountryCard capital={capital} currCode={currCode} fips={fips} countryIso={countryIso} continent={continent} country={country} currency={currency} iso={iso} phonePrefix={phonePrefix} population={population} />

    </>
  )
}

export default SearchCountries