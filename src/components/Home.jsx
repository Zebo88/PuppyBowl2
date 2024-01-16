import React from "react";
import logo from '../images/logo.jpeg'

export default function Home(){

  return (
    <div className="home-div">
      <h1>Welcome to the PuppyBowl!</h1>
      <img src={logo} alt="puppybowl logo" />
      <h3>Do you have what it takes to assemble the winning roster?</h3>
      <p className="homeInfo">Info about this webpage: <br />
        The Roster page displays the puppies that have been selected to play in the PuppyBowl. <br />
        To add a puppy to the roster, use the Add Player page and fill out the form. <br />
        To search for a puppy in the roster, use the Player List page.
      </p>
    </div>
  )
}