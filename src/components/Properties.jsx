import React from 'react'
import {PlusSmIcon} from "@heroicons/react/outline";


const file = {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
}

const Properties = () => {

    return (
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            <li key={file.source} className="relative">
                <div
                    className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75"/>
                    <button type="button" className="inset-0 focus:outline-none flex justify-center items-center text-white">
                        <PlusSmIcon className="h-8 w-8" aria-hidden="true"/>
                    </button>
                </div>
            </li>
        </ul>

    )
}

export default Properties