import {useState} from "react";
import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from './fire-base-config'
import {collection} from 'firebase/firestore'
import {Route, useNavigate, Routes} from "react-router-dom";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API


export default function App() {
    const navigate = useNavigate();

    const [value, loading, error] = useCollection(
        collection(db, 'test'),
        {
            snapshotListenOptions: {includeMetadataChanges: true},
        }
    );


    return (

        <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
            <SignedIn>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                </Routes>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn/>
            </SignedOut>
        </ClerkProvider>

    )
}

