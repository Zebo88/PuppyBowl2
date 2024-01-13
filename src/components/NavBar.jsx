import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return(
    <div id="navbar">
      <Link className="link navItem" to={`/`}>Home</Link>
      <Link className="link navItem" to={`/players`}>Roster</Link>
      <Link className="link navItem" to={`/addplayer`}>Add Player</Link>
      <Link className="link navItem" to={`/playerlist`}>Player List</Link>
    </div>
  )
}