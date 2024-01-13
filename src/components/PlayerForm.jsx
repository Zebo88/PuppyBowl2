import React, { useState } from "react";
import { addPlayer } from "../api/api.jsx";

export default function AddPlayerForm({ playerAdded, setPlayerAdded, error}){
  const [playerName, setPlayerName] = useState("");
  const [playerBreed, setPlayerBreed] = useState("");
  const [teamId, setTeamId] = useState("");
  const [playerStatus, setPlayerStatus] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [message, setMessage] = useState(null);

  async function handleSubmit(event){
    event.preventDefault();

    const msg = await addPlayer(playerName, playerBreed, teamId, playerStatus, imgURL);
    setMessage(msg);
    setPlayerName("");
    setPlayerBreed("");
    setTeamId("");
    setPlayerStatus("");
    setImgURL("");
    setPlayerAdded(true);
  };
  
  return (
    <>
      <h2>Add Player to Roster</h2>
      { message && <p>{ message }</p>}

      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            id="name" 
            type="text" 
            value={ playerName } 
            onChange={ (e) => setPlayerName(e.target.value) }
          />
        </label>
        <br/>
        <label>
          Breed:
          <input 
            id="br" 
            type="text"
            value={ playerBreed } 
            onChange={ (e) => setPlayerBreed(e.target.value)}
           />
        </label>
        <label>
          Team ID:
          <input 
            id="id" 
            type="text"
            value={ teamId } 
            onChange={ (e) => setTeamId(e.target.value)}
            placeholder="1 or 2"
           />
        </label>
        <label>
          Status:
          <input 
            id="st" 
            type="text"
            value={ playerStatus } 
            onChange={ (e) => setPlayerStatus(e.target.value)}
            placeholder="Field or Bench"
           />
        </label>
        <label>
          Image URL:
          <input 
            id="URL" 
            type="text"
            value={ imgURL } 
            onChange={ (e) => setImgURL(e.target.value)}
           />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}