import React from 'react'
import SearchForm from "../SearchForm/SearchForm"

function SearchCountries() {


    // handle Submit function to search for the country
    const handleSubmit = async (e) => {
        // to prevent default reload
        e.preventDefault();

        


    }

  return (
    <>
    <SearchForm searchBy="Country" placeholder="Country name" handleFormSubmit={handleSubmit} />
    </>
  )
}

export default SearchCountries