import React from "react";
import SignIn from "./SignIn";
import Chat from "./Chat";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./firebase";
import './App.css'


function App() {
  const [ user] = useAuthState(auth)

  return (
    <div className="App">

    { user? <Chat/> : <SignIn/>}
      
    </div>
  );
}

export default App;
