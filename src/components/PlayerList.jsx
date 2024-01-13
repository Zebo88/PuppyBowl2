import React from "react";
import { useEffect } from "react";
import { getAllPlayers } from "../api/api";
import { Link, useNavigate } from "react-router-dom";


export default function PlayerList({ playerList, setPlayerList, setPlayerId, setPlayerSelected, returnRoute, setReturnRoute }){
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers(){
      const players = await getAllPlayers();
      setPlayerList(players);
    }
    getPlayers();

  },[]);

  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {
        playerList.map((player) =>{
          return <li key={player.id} onClick={() => {
            setPlayerId(player.id);
            setPlayerSelected(true);
            setReturnRoute(`/playerlist`);
            navigate(`/players/:${player.id}`);
              }
            }>
            <Link className="player" to={`/players/:id`}>{player.name}</Link>
          </li>;
        })
      }
      </ul>
    </div>
  )
}