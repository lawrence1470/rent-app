import React, {useEffect} from 'react'
import Header from "../components/Header";
import {useUser} from "@clerk/clerk-react";
import {firestore} from '../fire-base-config'
import {
    useFirestoreQueryData,
    useFirestoreCollectionMutation
} from "@react-query-firebase/firestore";
import {
    collection,
    query,
    where
} from "firebase/firestore";
import {getAuth, signInWithCustomToken} from 'firebase/auth'
import {useNavigate} from "react-router-dom";


const WelcomeUser = () => {
    const {user} = useUser()
    const navigate = useNavigate()
    const ref = query(collection(firestore, "landlords"), where("id", "==", user.id)
    );

    const doesLandLordExist = useFirestoreQueryData(["landlord"], ref);

    const mutation = useFirestoreCollectionMutation(collection(firestore, "landlords"), {
            onSuccess: () => {
                doesLandLordExist.refetch()
                navigate('/dashboard')
            }
        })
    ;


    // TODO need to fix auth
    const setFirebaseAuth = async () => {
        const firebaseClerkToken = await user.getToken('firebase')
        // const userCredentials = await firebase
        //     .auth()
        //     .signInWithCustomToken(firebaseClerkToken);
    }

    if (doesLandLordExist.isLoading || mutation.isLoading) {
        return <div>Loading...</div>;
    }


    const handleSubmit = async () => {
        mutation.mutate({
            id: user.id
        })
    }


    return (
        <>
            <Header/>
            {doesLandLordExist.data.length > 0 ?

                <div className="bg-white">
                    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Welcome Back!</span>
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex rounded-md shadow">
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Continue to dashboard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                : <div className="bg-white">
                    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to dive in?</span>
                            <span className="block">Start your free trial today.</span>
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex rounded-md shadow">
                                <button
                                    onClick={handleSubmit}
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}


export default WelcomeUser