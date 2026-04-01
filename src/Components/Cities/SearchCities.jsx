import React from 'react'
import SearchForm from '../SearchForm/SearchForm'

function SearchCities() {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <SearchForm searchBy="City" placeholder="City Name" handleFormSubmit={handleSubmit} />
        </>
    )
}

export default SearchCities