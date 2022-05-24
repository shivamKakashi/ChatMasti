import React , { useState} from 'react';
import firebase from 'firebase/compat/app';
import {db, auth } from "./firebase" ;
import  { Input , Button } from "@material-ui/core"

function SendMsg({scroll}) {

     const sendMessage = async (e) => {
        e.preventDefault()

        const {uid, photoURL,displayName} = auth.currentUser
        console.log(displayName)

        await  db.collection("messages").add({
            text: msg,
            photoURL,
            uid,
            createdAt : firebase.firestore.FieldValue.serverTimestamp(),
            displayNameUp: displayName.toUpperCase()
        })
        setMsg('')
        
        
        scroll.current.scrollIntoView({ behavior: "smooth"})
    }   

    const [msg , setMsg] = useState('');

  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>

                <Input value={msg} onChange = {(e)=>{setMsg(e.target.value)} } placeholder="Message..."  style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }}></Input>
            
                <Button type="submit"  style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} >Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMsg