import React, { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm'

const AirplaneCard = ({ iata, airlineICAO, airlineIATA, airplaneIATA, constructionNumber, deliveryDate, engineCount, engineType, maidenFlightDate, model, registrationNumber, testRegistrationNumber, owner, series, status, productionLine, registrationDate, rollOutDate }) => {

  return (
    <>
      <div className='font-[Radio_Canada] my-5 w-full h-[70vh] flex items-center justify-center'>
        <div className='w-[70%] h-auto border-4 p-3 rounded-xl border-blue-950'>
          <h1 className='font-[Space_Grotesk] font-semibold text-5xl text-blue-950'>{productionLine}</h1>
          <div className='flex justify-between items-center my-3'>
            <div className='flex flex-col items-start justify-evenly'>
              <h3><span className='text-xl text-blue-900 font-semibold'>IATA : </span>{iata}</h3>
              <h3><span className='text-xl text-blue-900 font-semibold'>Airlines ICAO : </span>{airlineICAO}</h3>
              <h3><span className='text-xl text-blue-900 font-semibold'>Airlines IATA: </span>{airlineIATA}</h3>
            </div>
            <div className='flex flex-col items-end justify-evenly'>
              <h3><span className='text-xl text-blue-900 font-semibold'>Construction Number: </span>{constructionNumber}</h3>
              <h3><span className='text-xl text-blue-900 font-semibold'>Airplane IATA: </span>{airplaneIATA}</h3>
              <h3><span className='text-xl text-blue-900 font-semibold'>Delivery Date: </span>{deliveryDate}</h3>
            </div>
          </div>
          <div className='flex justify-between items-center my-3'>
            <div className='flex flex-col items-start justify-evenly'>
              <p><span className='text-xl text-blue-900 font-semibold'>Engine Count: </span>{engineCount}</p>
              <p><span className='text-xl text-blue-900 font-semibold'>Engine Type: </span>{engineType}</p>
              <p><span className='text-xl text-blue-900 font-semibold'>First Flight: </span>{maidenFlightDate}</p>
            </div>
            <div className='flex flex-col items-end justify-evenly'>
              <p><span className='text-xl text-blue-900 font-semibold'>Model: </span>{model}</p>
              <p><span className='text-xl text-blue-900 font-semibold'>Registration Number: </span>{registrationNumber}</p>
              <p><span className='text-xl text-blue-900 font-semibold'>Test Registration Number: </span>{testRegistrationNumber ? testRegistrationNumber : "Not Available"}</p>
            </div>
          </div>
          <div className='flex justify-between items-center my-3'>
            <div className='flex flex-col items-start justify-evenly'>
              <p><span className='text-xl text-blue-900 font-semibold'>Owner: </span>{owner}</p>
              <p><span className='text-xl text-blue-900 font-semibold'>Series : </span>{series}</p>
            </div>
            <div className='flex flex-col items-end justify-evenly'>
              <p><span className='text-xl text-blue-900 font-semibold'>Registration Date: </span>{registrationDate}</p>
              <p><span className='text-xl text-blue-900 font-semibold'>Roll Out Date: </span>{rollOutDate}</p>
            </div>
          </div>
          <p><span className='text-xl text-blue-900 font-semibold'>Status: </span>{status}</p>
        </div>
      </div>
    </>
  );

}


function SearchAirplanes() {

  // State Variables for Airplane
  const [fetched, setFetched] = useState(false);
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
    setDeliveryDate(airplaneData.delivery_date);
    setEngineCount(airplaneData.engines_count);
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
    setFetched(true);

  }

  return (
    <>
      <SearchForm searchBy="Airplanes" placeholder="Registration Number" handleFormSubmit={handleSubmit} />
      {fetched ?
        <AirplaneCard iata={iata} airlineICAO={airlineICAO} airlineIATA={airlineIATA} airplaneIATA={airplaneIATA} constructionNumber={constructionNumber} deliveryDate={deliveryDate.split("T")[0]} engineCount={engineCount} engineType={engineType} maidenFlightDate={maidenFlightDate.split("T")[0]} model={model} registrationNumber={registrationNumber} testRegistrationNumber={testRegistrationNumber} owner={owner} series={series} status={status} productionLine={productionLine} registrationDate={registrationDate} rollOutDate={rollOutDate} />
        :
        ""
      }
    </>
  )
}

export default SearchAirplanes