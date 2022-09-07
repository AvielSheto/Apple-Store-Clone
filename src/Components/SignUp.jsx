import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function SignUp() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

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
        try {
            const user = await signInWithEmailAndPassword(auth,
                loginEmail,
                loginPassword
            )
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }

    const logout = async () => {
        await signOut(auth)

    }

    return (
        <div style={{backgroundColor:"rgba(255, 255, 255, 0.673)"}}>
            <div>
                <h3> Register User </h3>
                <input placeholder="Email..." onChange={(e) => { setRegisterEmail(e.target.value); }} />
                <input placeholder="Password..." onChange={(e) => { setRegisterPassword(e.target.value) }} />
                <button onClick={register}> Create User</button>
            </div>

            <div>
                <h3> Login </h3>
                <input placeholder="Email..." onChange={(e) => { setLoginEmail(e.target.value) }} />
                <input placeholder="Password..." onChange={(e) => { setLoginPassword(e.target.value) }} />

                <button onClick={login}> Log in</button>
            </div>

            <h4> User Logged In: </h4>
            {user?.email}

            <button onClick={logout}> Sign Out </button>







            {/* <form>
                <br />
                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div class="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
                <button onClick={logout} type="button" class="btn btn-primary btn-block mb-4">Log Out</button>

              
            </form> */}


        </div>
    )
}
