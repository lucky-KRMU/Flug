import React, {useState} from 'react'
import SearchForm from "../SearchForm/SearchForm"

function SearchAircraftType() {

    // State Variables
    const [iata, setIata] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    let url = "/Dummy/dummy_aircraft_type_json.json"

    const handleSubmit = async (e) => {
        e.preventDefault();

        let response = await fetch(url);
        let data = await response.json();
        
        let aircraftTypeData = data.data[0];
        

    }

  return (
    <>
    <SearchForm searchBy="Aircraft type" placeholder="Aircraft IATA Code" handleFormSubmit={handleSubmit} />
    </>
  )
}

export default SearchAircraftType