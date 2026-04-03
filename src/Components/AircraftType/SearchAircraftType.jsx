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

    let url = "/Dummy/dummy_aircraft_type_json.json"

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            setLoading(true);

            let response = await fetch(url);
            let data = await response.json();

            let aircraftTypeData = data.data[0];

            setIata(aircraftTypeData.iata_code);
            setName(aircraftTypeData.aircraft_name);
            setType(aircraftTypeData.plane_type_id);

            setFetched(true);
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <SearchForm searchBy="Aircraft type" placeholder="Aircraft IATA Code" handleFormSubmit={handleSubmit} />
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