import React, { useEffect, useState } from "react";
import { getAllPlayers, removePlayer } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

export default function AllPlayers({ playerList, setPlayerList, playerSelected, setPlayerSelected, playerId, setPlayerId, playerAdded, setPlayerAdded, returnRoute, setReturnRoute }){
  // const [playerList, setPlayerList] = useState([]);
  const [playerRemoved, setPlayerRemoved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers(){
      const players = await getAllPlayers();
      setPlayerList(players);
      setPlayerRemoved(false);
    }
    getPlayers();

  },[playerRemoved, playerAdded]);

  return (
    <>
    <h2>Player Roster</h2>
    <ul>
      {
        playerList.map((player, idx) => {
          return(          
          <li key={idx}>
            <h2>{player.name} #{player.id}</h2>
            <img src={player.imageUrl} alt={player.name} />
            <br />
            <button onClick={() => {
              setPlayerId(player.id);
              setPlayerSelected(true);
              setReturnRoute(`/players`);
              navigate(`/players/:${player.id}`);
                }                
              }>
              <Link className="details" to={'/players/:id'}>Details</Link>
            </button>
            <button className="remove" onClick={() => {
              removePlayer(player.id);
              setPlayerRemoved(true);
            }}>
              Remove
            </button>
          </li>)
        })
      }
    </ul>
    </>
  )
}