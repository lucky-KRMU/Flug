import React, { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'

function SearchAirplanes() {

  // State Variables for Airplane
  const [iata, setIata] = useState("");
  const [airlineICAO, setAirlineICAO] = useState("");
  const [airlineIATA, setAirlineIATA] = useState("");
  const [airplaneIATA, setAirplaneIATA] = useState("");
  const [constructionNumber, setConstructionNumber] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [engineCount, setEngineCount] = useState("");
  const [engineType, SetEngineType] = useState("");
  const [maidenFlightDate, setMaidenFlightDate] = useState("");
  const [model, setModel] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [testRegistrationNumber, setTestRegistrationNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [series, setSeries] = useState("");
  const [status, setStatus] = useState("");
  const [productionLine, setProductionLine] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [rollOutDate, setRollOutDate] = useState("");


  // url for the dummy testing json
  let url = "../Dummy/dummy_airplanes_json.json"

  // async function to fetch the data
  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(url);
    let data = await response.json();
    let airplaneData = data.data[0];

    // updating the state variables
    setIata(airplaneData.iata_type);
    setAirlineICAO(airplaneData.airline_icao_code);
    setAirlineIATA(airplaneData.airline_iata_code);
    setAirplaneIATA(airplaneData.iata_code_long);
    setConstructionNumber(airplaneData.construction_number);
    setDeliveryDate(airplaneData.deliveryDate);
    setEngineCount(airplaneData.engine_count);
    SetEngineType(airplaneData.engines_type);
    setMaidenFlightDate(airplaneData.first_flight_date);
    setModel(airplaneData.model_code);
    setRegistrationNumber(airplaneData.registration_number);
    setTestRegistrationNumber(airplaneData.test_registration_number);
    setOwner(airplaneData.plane_owner);
    setSeries(airplaneData.plane_series);
    setStatus(airplaneData.plane_status);
    setProductionLine(airplaneData.production_line);
    setRegistrationDate(airplaneData.registration_date);
    setRollOutDate(airplaneData.rollout_date);


  }

  return (
    <>
    <SearchForm searchBy="Airplanes" placeholder="Registration Number" handleFormSubmit={handleSubmit} />
    </>
  )
}

export default SearchAirplanes