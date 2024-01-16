import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpeg'

export default function Nav() {
  return(
    <div id="navbar">
      <div className="navLogo">
        <img src={logo} alt="puppybowl logo" />
      </div>
      <div className="navLinks">
        <Link className="link navItem" to={`/`}>Home</Link>
        <Link className="link navItem" to={`/players`}>Roster</Link>
        <Link className="link navItem" to={`/addplayer`}>Add Player</Link>
        <Link className="link navItem" to={`/playerlist`}>Player List</Link>
      </div>
    </div>
  )
}