import React from 'react'
import SearchForm from "../SearchForm/SearchForm"

function SearchAircraftType() {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

  return (
    <>
    <SearchForm searchBy="Aircraft type" placeholder="Aircraft IATA Code" handleFormSubmit={handleSubmit} />
    </>
  )
}

export default SearchAircraftType