import React from 'react'
import Header from "../components/Header";
import NarrowSideBar from "../components/NarrowSideBar";


const TestRoute = () => {


    return (
        <>
            <div className="h-full flex">
                <NarrowSideBar/>
                <div className="flex-1 flex flex-col overflow-hidden">

                    <Header/>
                </div>

            </div>
        </>
    )
}

export default TestRoute