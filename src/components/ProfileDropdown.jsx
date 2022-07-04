import React from 'react'
import {Menu} from "@headlessui/react";
import {UserButton, useUser} from "@clerk/clerk-react";




const ProfileDropdown = () => {
    const {user} = useUser();


    return (
        <Menu as="div" className="relative flex-shrink-0">
            <div>
                <Menu.Button
                    className="bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <span className="mr-2">{user ? <h1>Hello, {user.firstName}!</h1> : null}</span>
                    <UserButton/>
                </Menu.Button>
            </div>
        </Menu>

    )
}

export default ProfileDropdown