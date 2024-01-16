import React, { useEffect, useState } from "react";
import { getAllPlayers } from "../api/api";
import { Link, useNavigate } from "react-router-dom";


export default function PlayerList({ playerList, setPlayerList, setPlayerId, setPlayerSelected, returnRoute, setReturnRoute }){
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function getPlayers(){
      const players = await getAllPlayers();
      setPlayerList(players);
    }
    getPlayers();

  },[]);

  return (
    <div className="playerList">
      <h2>Player List</h2>
      <input
      className="searchPlayer"
       type="search"
       placeholder="Search player"
       onChange={(e) => {setSearchInput(e.target.value)}}
      />
      <ul className="playerUL">
      {
        playerList.filter((player) => {
          if(searchInput == ""){
            return player.name;
          }else if(player.name.toLowerCase().includes(searchInput.toLowerCase())){
            return player.name;
          }
        }).map((player) => {
          return(
            <li key={player.id} onClick={() => {
              setPlayerId(player.id);
              setPlayerSelected(true);
              setReturnRoute(`/playerlist`);
              navigate(`/players/:${player.id}`);
                }
              }>
              <Link className="player" to={`/players/:id`}>{player.name}</Link>
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}