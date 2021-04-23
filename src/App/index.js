import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import './App.scss';
import getJams from '../helpers/data/getJams';

function App() {
  const [lyrics, setLyrics] = useState('');
  const [userInput, setUserInput] = useState({
    artist: '',
    title: ''
  });
  const [artist, setArtist] = useState({
    artist: '',
    title: ''
  });

  const getLyrics = () => {
    getJams(userInput.artist, userInput.title)
      .then((song) => {
        setLyrics(song);
      });
    setArtist({
      artist: userInput.artist,
      title: userInput.title
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(userInput);
    setUserInput({
      artist: '',
      title: ''
    });
    getLyrics();
  };

  const handleUserInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div>
      <Form className = "form"
      onSubmit={handleSubmit}>
       <FormGroup id="formGroup">
         <Label for="artist">Artist</Label>
         <Input id='artist' placeholder="Cherry Glazerr" value={userInput.artist} onChange={handleUserInput}>
         </Input>
       </FormGroup>
       <FormGroup id="formGroup">
         <Label for="title">Title</Label>
         <Input id='title' placeholder="Rabbit Hole" value={userInput.title} onChange={handleUserInput}>
         </Input>
       </FormGroup>
       <Button type='submit'>
       Submit
      </Button>
     </Form>
     <div>
       <h3 id="artistInfo">{artist.title} by {artist.artist}</h3>
       <p id="lyricContainer">{lyrics}</p>
     </div>
    </div>
  );
}

export default App;
