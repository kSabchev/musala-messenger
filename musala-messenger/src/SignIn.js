import React from 'react'
import firebase from "firebase";
import { auth } from './firebase'

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <button onClick={signInWithGoogle}> Sing in with Google</button>
        </div>
    )
}

export default SignIn
