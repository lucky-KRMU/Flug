import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

function Flights() {
  return (
    <>
    <div className='h-[70vh] w-full flex items-center justify-center'>
        <form id='search-flight-num'>
        <h3 className='text-blue-800 text-4xl text-bold font-[Radio_Canada]'>Search By Flight Number?</h3>
        <div>
            <input type="text" name="flight-num" id="flight-num" />
            <button type="submit"><FaMagnifyingGlass/></button>
        </div>
        </form>
    </div>
    </>
  )
}

export default Flights