import React from 'react'
import {PlusSmIcon} from "@heroicons/react/outline";


const AddPropertyButton = () => {


    return (
        <button
            type="button"
            className="flex bg-sky-100 p-1 h-20 w-20 rounded-xl items-center justify-center text-sky-500 hover:bg-sky-200">
            <PlusSmIcon className="h-6 w-6" aria-hidden="true"/>
        </button>
    )
}

export default AddPropertyButton