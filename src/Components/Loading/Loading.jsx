import React from 'react'
import { FaPlaneCircleCheck } from 'react-icons/fa6'

function Loading() {
    return (
        <>
            <div className='text-5xl flex items-center justify-center gap-4 w-full animate-pulse text-blue-900 font-bold min-h-[70vh]'>
             <FaPlaneCircleCheck/>   Loading...
            </div>
        </>
    )
}

export default Loading