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
    <div className="form-container">
      <h2>Add Player to Roster</h2>
      { message && <p>{ message }</p>}

      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name: <br />
          <input 
            id="name" 
            type="text" 
            value={ playerName } 
            onChange={ (e) => setPlayerName(e.target.value) }
          />
        </label>
        <label>
          Breed: <br />
          <input 
            id="br" 
            type="text"
            value={ playerBreed } 
            onChange={ (e) => setPlayerBreed(e.target.value)}
           />
        </label>
        <label>
          Team ID: <br />
          <input 
            id="id" 
            type="text"
            value={ teamId } 
            onChange={ (e) => setTeamId(e.target.value)}
            placeholder="1 or 2"
           />
        </label>
        <label>
          Status: <br />
          <input 
            id="st" 
            type="text"
            value={ playerStatus } 
            onChange={ (e) => setPlayerStatus(e.target.value)}
            placeholder="Field or Bench"
           />
        </label>
        <label>
          Image URL: <br />
          <input 
            id="URL" 
            type="text"
            value={ imgURL } 
            onChange={ (e) => setImgURL(e.target.value)}
           />
        </label>
        <button className="button-74" type="submit" role="button">Submit</button>
      </form>
      </div>
    </>
  );
}