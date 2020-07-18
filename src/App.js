import React, { useState,useEffect } from 'react';
import './App.css';
import { Button,FormControl, Input,InputLabel, IconButton } from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input , setInput] = useState(''); //Example of hook after =
  const [messages, setMessages] = useState([
    {username:"jai",message:"Hello Jai"},
    {username:"kishan",message:"Hello Kishan"}
  ]);
  const [username,setUsername] = useState('');

  //useState is like variable setup in react
  //useEffect is like block of code/snippet executes on condition 


  useEffect(() => {
    //run code here
    setUsername(prompt('Please enter your name'))
  },[])

  useEffect(() => {
    //run once when app component loads

    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {  //like json structure
      setMessages(snapshot.docs.map(doc => ({ id:doc.id , message:doc.data() })))
    })
  },[])

  const sendMessage = (event) => {
    //Logic for seend Buttuon comes here
    event.preventDefault();
    //sending data to firebase database
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }


  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=90" />
      <h1>Messenger Clone</h1>
      <h2>Welcome {username}</h2>


        <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input className="app__input" placeholder="Type a message" value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick = {sendMessage}>
            <SendIcon/>
          </IconButton>
        
        </FormControl>
        </form>

        <FlipMove>
        {
        messages.map(({id,message}) => {
        return <Message key={id} username={username} message = {message}/>
        })
      }
        </FlipMove>

    </div>
  );
}

export default App;
 