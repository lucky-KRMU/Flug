import React from 'react'
import { Link } from 'react-router';

function SearchCard({Heading, to}) {
    return(
        <>
            <h3 className='h-30 w-60 m-6 text-4xl text-blue-900 flex items-center justify-center border-2 rounded-xl cursor-pointer hover:scale-[1.2] hover:font-semibold hover:border-4 hover:rounded-3xl duration-200 ease-out '><Link to={to}>{Heading}</Link></h3>
            
        </>
    );
}

function Search() {
  return (
    <>
    <section id="search" className='min-h-[70vh] w-auto flex flex-col items-center justify-center'>
    <h2 className='text-4xl py-10 font-semibold font-[Radio_Canada] text-blue-950'>What Do you what to Search?</h2>
    <div id='search-options' className='grid lg:grid-cols-3 gap-5'>
        <SearchCard Heading="Flights" to="flights" />
        <SearchCard Heading="Airports" to="airports" />
        <SearchCard Heading="Airlines" to="airlines" />
        <SearchCard Heading="Airplanes" to="" />
        <SearchCard Heading="Aircraft Types" to="" />
        <SearchCard Heading="Cities" to="" />
        <SearchCard Heading="Countries" to="" />
        <SearchCard Heading="Taxes" to="" />
    </div>
    
    </section>
    </>
  )
}

export default Search