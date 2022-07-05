import React from "react";
import {Route, useNavigate, Routes} from "react-router-dom";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
} from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";
import WelcomeUser from "./pages/WelcomeUser";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API

const queryClient = new QueryClient()


export default function App() {
    const navigate = useNavigate();


    return (
        <QueryClientProvider client={queryClient}>

            <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
                <SignedIn>
                    <Routes>
                        <Route path="/" element={<WelcomeUser/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>

                    </Routes>
                </SignedIn>
                <SignedOut>
                    <RedirectToSignIn/>
                </SignedOut>
            </ClerkProvider>
        </QueryClientProvider>


    )
}

