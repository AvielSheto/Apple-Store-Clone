import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'

export default function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth,
                 registerEmail,
                 registerPassword
                  )
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    const login = async () => {

    }

    const logout = async () => {

    }

    return (
        <div>
            <div>
                <h3> Register User </h3>
                <input
                    placeholder="Email..."
                    onChange={(e) => { setRegisterEmail(e.target.value); }}
                />
                <input
                    placeholder="Password..."
                    onChange={(e) => { setRegisterPassword(e.target.value); }}
                />

                <button onClick={register}> Create User</button>
            </div>

            <div>
                <h3> Login </h3>
                <input
                    placeholder="Email..."
                    onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }}
                />
                <input
                    placeholder="Password..."
                    onChange={(e) => {
                        setLoginPassword(e.target.value);
                    }}
                />

                <button onClick={login}> Login</button>
            </div>

            <h4> User Logged In: </h4>
            {user?.email}

            {/* <button onClick={logout}> Sign Out </button> */}
        </div>
    )
}
