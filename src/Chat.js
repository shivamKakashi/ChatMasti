import React, {useState,useEffect , useRef} from "react";
import SignOut from "./SignOut";
import { db ,auth } from "./firebase";
import SendMsg from "./SendMsg";
import "./Chat.css"
function Chat() {

    const scroll = useRef()
    const [messages, setMessages] = useState([]);
    console.log(messages)
    useEffect(()=>{
  
    const q = db.collection("messages").limit(50).orderBy('createdAt')
    const pushMsg = q.onSnapshot(snapshot=>{
        setMessages(snapshot.docs.map(doc=>doc.data()))
    })
    return pushMsg


    },[])
    return(
<div>
        <SignOut/>
    <div className="msgs">

        {messages.map(({id,text,photoURL, uid, displayNameUp,createdAt})=>(
            <div>
                    {/* {console.log(createdAt)} */}
                    <div key={createdAt?.seconds} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                        
                        <img src={photoURL} alt="sorry pic is not available"></img>
                        <div>
                        <span className="UserName">{displayNameUp}</span>
                        <p>{text}</p>
                        </div>
                    </div>
            </div>
        ))}

    </div>
           <SendMsg scroll={scroll}/>   
            <div ref={scroll}></div>
</div>
    )
}

export default Chat;