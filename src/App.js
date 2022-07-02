import {useState} from "react";
import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from './fire-base-config'
import {collection} from 'firebase/firestore'

export default function App() {
    const [users, setUsers] = useState([])
    const [value, loading, error] = useCollection(
        collection(db, 'test'),
        {
            snapshotListenOptions: {includeMetadataChanges: true},
        }
    );

    console.log(value, error, 'hihihi')

    return (
        <h1 className="text-3xl font-bold underline">
            {value && value.docs.map((doc) => (
                <div key={doc.id}>
                    {JSON.stringify(doc.data())},{' '}
                </div>
            ))}
        </h1>
    )
}