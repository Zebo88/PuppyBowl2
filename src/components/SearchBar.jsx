import React, {useState} from 'react'
import { Link } from 'react-router-dom';


function SearchBar({ playerList, setPlayerList, setPlayerId, setPlayerSelected }) {

  const [searchInput, setSearchInput] = useState("");
  const [searchedPlayer, setSearchedPlayer] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (searchInput.length > 0) {
        playerList.filter((player) => {
        setSearchedPlayer(player.name.match(searchInput));
      });
    }
  };



  return (
    <div>
    <input
       type="search"
       placeholder="Search player here"
       onChange={handleChange}
       value={searchInput} />

    <table>
      <thead>
        <tr>
          <th>Player Name</th>
        </tr>
      </thead>
      <tbody>
        {playerList.map((player, idx) => {
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
      })}
      </tbody>
    </table>

    </div>
  )

};

export default SearchBar;