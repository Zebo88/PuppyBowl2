import React from "react";
import Home from "./Home";
import AllPlayers from './AllPlayers';
import SinglePlayer from './SinglePlayer';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";


export default function MainContainer() {
  const [playerList, setPlayerList] = useState([]);
  const [playerSelected, setPlayerSelected] = useState(false);
  const [playerId, setPlayerId] = useState(null);
  const [playerAdded, setPlayerAdded] = useState(false);
  const [returnRoute, setReturnRoute] = useState("");

  return(
    <div id="main-section">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/players' element={<AllPlayers
        playerList={playerList}
        setPlayerList={setPlayerList}
        playerId={playerId}
        setPlayerId={setPlayerId}
        playerSelected={playerSelected} 
        setPlayerSelected={setPlayerSelected}
        playerAdded={playerAdded}
        setPlayerAdded={setPlayerAdded}
        returnRoute={returnRoute}
        setReturnRoute={setReturnRoute}
      />} />
      <Route path='/players/:id' element={<SinglePlayer
        playerId={playerId}
        setPlayerId={setPlayerId}
        playerSelected={playerSelected} 
        setPlayerSelected={setPlayerSelected}
        returnRoute={returnRoute}
      />} /> 
      <Route path='/addplayer' element={<PlayerForm
        playerAdded={playerAdded}
        setPlayerAdded={setPlayerAdded}
      />} />
      <Route path='/playerlist' element={<PlayerList
        playerList={playerList}
        setPlayerList={setPlayerList}
        playerId={playerId}
        setPlayerId={setPlayerId}
        setPlayerSelected={setPlayerSelected}
        returnRoute={returnRoute}
        setReturnRoute={setReturnRoute}
      />} />
    </Routes>
  </div>
  )
}