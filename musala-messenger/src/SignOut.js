import React from 'react'

import {auth } from './firebase';


function SignOut() {
    return (
        <div>
            {auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign out</button>
      )}
        </div>
    )
}

export default SignOut
