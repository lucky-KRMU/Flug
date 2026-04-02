import React, { useState } from 'react'
import SearchForm from "../SearchForm/SearchForm"

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
            console.log(countryData);

        } catch (err) {
            console.log(err);
        }




    }

  return (
    <>
    <SearchForm searchBy="Country" placeholder="Country name" handleFormSubmit={handleSubmit} />
    </>
  )
}

export default SearchCountries