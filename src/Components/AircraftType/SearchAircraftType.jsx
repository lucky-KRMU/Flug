import React, { useEffect, useState } from 'react'
import SearchForm from "../SearchForm/SearchForm"
import Loading from "../Loading/Loading"


const AircraftTypeCard = ({ iata, name, type }) => {
    return (
        <>
            <div className='h-[70vh] w-full flex items-center justify-center font-[Radio_Canada]'>
                <div className='w-[80%] h-auto flex flex-col items-center justify-evenly gap-5 p-3 border-4 rounded-xl border-blue-950'>
                    <h1 className='font-[Space_Grotesk] font-semibold text-blue-950 text-5xl'>{name}</h1>
                    <div className='w-full h-full flex items-center justify-between text-xl'>
                        <p><span className='font-semibold text-blue-900'>IATA Code: </span>{iata}</p>
                        <p className='capitalize'><span className='font-semibold text-blue-900'>Type: </span>{type.replaceAll("_", " ")}</p>
                    </div>
                </div>
            </div>
        </>
    );
}


function SearchAircraftType() {

    // changing the Document Title
    useEffect(() => {
        document.title = "Aircraft Type | Flug"
    }, [])


    // State Variables
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [iata, setIata] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [inputVal, setInputVal] = useState("");

    let API_KEY = import.meta.env.VITE_API_KEY;

    // const url = `https://api.aviationstack.com/v1/aircraft_types?access_key=${API_KEY}`;
    const url = "test_dummy_aircraft_type_data.json"
    const options = { method: 'GET', headers: { Accept: 'application/json' } };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {

            setLoading(true);

            let response = await fetch(url, options);
            let data = await response.json();

            let aircraftTypeData = data.data;
            console.log(aircraftTypeData)

            //logic to search
            aircraftTypeData.forEach(element => {
                if(element.iata_code == inputVal){
                    setIata(element.iata_code ? element.iata_code : "UNAVAILABLE");
                    setName(element.aircraft_name ? element.aircraft_name : "UNAVAILABLE");
                    setType(element.plane_type_id ? `ID: ${element.plane_type_id}` : "UNAVAILABLE")
                }
            });

            setFetched(true);
            setLoading(false);


            // To scroll at the bottom most
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        } catch (err) {
            console.log(err)
        }
    }


    const handleAircraftType = (e) => {
        setInputVal(e.target.value.toUpperCase());
    }


    return (
        <>
            <SearchForm searchBy="Aircraft type" placeholder="Aircraft IATA Code" handleFormSubmit={handleSubmit} value={inputVal} handleChange={handleAircraftType} />
            {
                loading ?
                    <Loading />
                    : ""
            }
            {
                fetched ?
                    <AircraftTypeCard iata={iata} name={name} type={type} />
                    : ""
            }
        </>
    )
}

export default SearchAircraftType