import React, { useEffect } from 'react'
import { FaPlaneSlash } from 'react-icons/fa6'

function NotFound() {

    useEffect(()=>{
        document.title = "Not Found | Flug"
    }, [])

    return (
        <>
            <div className='h-[70vh] w-full flex items-center justify-center gap-2 text-7xl font-[Space_Grotesk] font-bold text-blue-900'>
                <FaPlaneSlash />
                <h1>404 Not Found</h1>
            </div>
        </>
    )
}

export default NotFound