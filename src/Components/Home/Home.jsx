import React from 'react'
import Hero from "../Hero/Hero"
import { NavLink } from 'react-router'
import { GiPlaneWing } from "react-icons/gi";
import { FaPlaneUp } from "react-icons/fa6";

// SearchCard for the search section
function SearchCard({ Heading, to }) {
    return (
        <>
            <h3 className='h-30 w-60 m-6 text-3xl text-blue-900 flex items-center justify-center border-2 rounded-xl cursor-pointer hover:scale-[1.2] hover:font-semibold hover:border-4 hover:rounded-3xl duration-200 ease-out '><NavLink to={to}>{Heading}</NavLink></h3>

        </>
    );
}


function Home() {
    return (
        <>
            <Hero />
            <section id="search" className='font-[Radio_Canada] w-full h-auto my-10 p-10 flex flex-col justify-around items-center'>
                <h1 className='text-4xl text-blue-950 my-4 flex justify-center items-center gap-2 font-semibold'><GiPlaneWing />Search Anything You want To<GiPlaneWing className='scale-x-[-1]' /></h1>
                <div id='search-options' className='grid lg:grid-cols-3 gap-5'>
                    <SearchCard Heading="Flights" to="search/flights" />
                    <SearchCard Heading="Airports" to="search/airports" />
                    <SearchCard Heading="Airlines" to="search/airlines" />
                    <SearchCard Heading="Airplanes" to="search/airplanes" />
                    <SearchCard Heading="Aircraft Types" to="search/aircraft/type" />
                    <SearchCard Heading="Cities" to="search/cities" />
                    <SearchCard Heading="Countries" to="search/countries" />
                </div>
            </section>
            <section id="whyFlug" className='my-10 text-center'>
                <h1 className='flex justify-center items-center gap-2 text-blue-950 font-semibold text-4xl'>Why Flug<FaPlaneUp />?</h1>
                <div className='my-5 text-xl text-blue-900'>
                    <p>
                        Designed for modern travelers, Flug combines speed with simplicity.
                    </p>
                    <p>
                        From intuitive search to seamless navigation, every detail is crafted to make your journey planning effortless.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Home