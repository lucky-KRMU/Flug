import React, {useState} from 'react'
import SearchForm from "../SearchForm/SearchForm"


const AircraftTypeCard = ({ iata, name, type }) => {
    return(
        <>
        <p>{iata}</p>
        <p>{name}</p>
        <p>{type}</p>
        </>
    );
}


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
        
        setIata(aircraftTypeData.iata_code);
        setName(aircraftTypeData.aircraft_name);
        setType(aircraftTypeData.plane_type_id);

    }

  return (
    <>
    <SearchForm searchBy="Aircraft type" placeholder="Aircraft IATA Code" handleFormSubmit={handleSubmit} />
    <AircraftTypeCard iata={iata} name={name} type={type} />
    </>
  )
}

export default SearchAircraftType