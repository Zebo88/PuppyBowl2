import React, { useEffect, useState } from "react";
import { getSinglePlayer } from "../api/api";
import { Link, useNavigate } from "react-router-dom";


export default function SinglePlayer({ playerSelected, setPlayerSelected, playerId, setPlayerId, returnRoute }){
  const [player, setPlayer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayer(){
      const singlePlayer = await getSinglePlayer(playerId);
      setPlayer(singlePlayer);
    }
    getPlayer();

  },[]);

  return (
    <>
    <h2>Player Details</h2>
    <ul>
      {        
        <li key={player.id}>
          <h2>{player.name} #{player.id}</h2>
          <p>{player.breed}</p>
          <p>{player.status}</p>
          <p>{player.teamId}</p>
          <img src={player.imageUrl} alt={player.name} />
          <br />
          <button onClick={() => {
            setPlayerSelected(false);
            navigate(returnRoute);//return to the previous route that routed to this component.
            }
          }>
            <Link className="link" to={returnRoute}>Return</Link>
          </button>
        </li>
      }
    </ul>
    </>
  )
}