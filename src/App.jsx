import { useState } from 'react'
import { Outlet } from 'react-router';
import Header  from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {
 

  return (
    <>
    {/* Default font */}
    <div className='font-[Radio_Canada]'>
    <Header />
    <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default App
