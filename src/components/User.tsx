import { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

export const User = () => {
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Mauricio'
        });
    }

    return (
        <div className="mt-5">
            <h3>User: useState</h3>
            <button
                className="btn btn-outline-primary"
                onClick={login}
            >
                Login
            </button>

            {
                (!user)
                    ? <pre>User does not exist</pre>
                    : <pre>{JSON.stringify(user)}</pre>
            }
        </div>
    )
}
