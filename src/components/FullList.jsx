import React from "react";
import { Link } from "react-router-dom";


export default function FullList({playerList, setPlayerList, setPlayerId, setPlayerSelected}){
  
  return (
      playerList.map((player, idx) => {
        return (
          <tr key={player.id}>
            <td onClick={() => {
                setPlayerId(player.id);
                setPlayerSelected(true);
                setReturnRoute(`/playerlist`);
                navigate(`/players/:${player.id}`);
              }}>
                <Link className="player" to={`/players/:id`}>{player.name}</Link>
              </td>
            </tr>
        )
      })
    )
  }