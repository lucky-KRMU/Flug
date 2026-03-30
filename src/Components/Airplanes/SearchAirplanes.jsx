import React from 'react'
import SearchForm from '../SearchForm/SearchForm'

function SearchAirplanes() {

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <>
    <SearchForm searchBy="Airplanes" placeholder="Airplane Name" handleFormSubmit={handleSubmit} />
    </>
  )
}

export default SearchAirplanes