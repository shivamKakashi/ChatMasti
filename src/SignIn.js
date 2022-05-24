import React from "react";
import { Button, Box } from "@material-ui/core";
import { auth } from "./firebase.js";
import { GoogleAuthProvider } from "firebase/auth"


function SignIn() {

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        auth.signInWithPopup(provider)
      }

    return(
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center', flexDirection:'column' }}>

            
            <img src="https://lh3.googleusercontent.com/GAx455GwtY2Dxe3OIk1jl4cuHf6H8qPaFNiOjKiGflAeUDds2wlc3Sm8RuPl3r7rPdk" alt="img is not there" style={ {width:"120px", height:"20vh"}} />
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Please Sign In</Button>
        </div>
    )
}

export default SignIn;