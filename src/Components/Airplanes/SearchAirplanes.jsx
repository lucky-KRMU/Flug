import React from 'react'
import SearchForm from '../SearchForm/SearchForm'

function SearchAirplanes() {


  // url for the dummy testing json
  let url = "../Dummy/dummy_airplanes_json.json"

  // async function to fetch the data
  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

  }

  return (
    <>
    <SearchForm searchBy="Airplanes" placeholder="Airplane Name" handleFormSubmit={handleSubmit} />
    </>
  )
}

export default SearchAirplanes