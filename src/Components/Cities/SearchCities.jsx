import React from 'react'
import SearchForm from '../SearchForm/SearchForm'

function SearchCities() {


    // url
    let url = "../Dummy/dummy_cities_json.json"


    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await fetch(url);
        let data = await response.json();
        let cityData = data.data[0];

        console.log(cityData);
        
    }

    return (
        <>
            <SearchForm searchBy="City" placeholder="City Name" handleFormSubmit={handleSubmit} />
        </>
    )
}

export default SearchCities