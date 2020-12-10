import React , { useEffect, useState } from 'react'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "./firebase";
import firebase from "firebase/app";

function ChatRoom() {

    // const [user , setUser ] = useState('');
    const [input, setInput ] = useState('');
    const [ messeges, setMesseges] = useState([]);

    // { username: "a" , text: "hi"} ,{username:"b", text: "hello" }

    const messegesCollection = db.collection("myMesseges");
    const query = messegesCollection.orderBy("createdAt", "asc").limit(25);
    const [user] = useAuthState(auth);
    const [messages] = useCollectionData(query, { idField: "id" });


    
    const sendMessege = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        
        //setMesseges([...messeges, { username: user, text:input}]);
        await messegesCollection.add({
            text: input,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            username: user?.displayName,
             uid,
             photoURL,
        });

        setInput('');
    }

    // useEffect(  () => {
    //     setUser(prompt('enter username'))
    //  } , [])

    return (
        <div>
            <form> 
                <input value={input} onChange={ (event)=> setInput(event.target.value)} />
                <button type="submit" onClick={sendMessege}> submit message </button>
            </form>
            {
                messeges.map( (message) => <p> {message.username} : {message.text} </p>)
            }
        </div>
    )
}

export default ChatRoom