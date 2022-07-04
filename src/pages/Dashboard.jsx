import React, {useState} from 'react'

import NarrowSideBar from "../components/NarrowSideBar";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import AddPropertyButton from "../components/AddPropertyButton";


const Dashboard = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <div className="h-full flex">
                <NarrowSideBar/>

                {/* Mobile menu */}
                <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>

                {/* Content area */}
                <div className="flex-1 flex flex-col overflow-hidden">

                    <Header setMobileMenuOpen={setMobileMenuOpen}/>
                    {/* Main content */}
                    <div className="flex-1 flex items-stretch overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            {/* Primary column */}
                            <section aria-labelledby="primary-heading"
                                     className="min-w-0 flex-1 h-full flex flex-col lg:order-last">

                                {/* Your content */}
                                <AddPropertyButton/>
                            </section>
                        </main>

                        {/* Secondary column (hidden on smaller screens) */}
                        <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
                            {/* Your content */}
                        </aside>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard