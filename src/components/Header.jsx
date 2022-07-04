import React from 'react'
import {
    MenuAlt2Icon,
    PlusSmIcon,

} from '@heroicons/react/outline'
import ProfileDropdown from "./ProfileDropdown";


const Header = ({setMobileMenuOpen}) => {
    return (
        <header className="w-full">
            <div
                className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                <button
                    type="button"
                    className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
                </button>
                <div className="flex-1 flex justify-end px-4 sm:px-6">
                    <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                        <ProfileDropdown/>
                        <button
                            type="button"
                            className="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <PlusSmIcon className="h-6 w-6" aria-hidden="true"/>
                            <span className="sr-only">Add file</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header