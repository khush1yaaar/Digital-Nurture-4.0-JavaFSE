import React from 'react';

const IndianPlayers = () => {
  // Array of Indian players
  const indianPlayers = [
    'Player A', 'Player B', 'Player C', 'Player D', 
    'Player E', 'Player F', 'Player G', 'Player H'
  ];

  // Destructure into odd and even team players
  const [player1, player2, player3, player4, player5, player6, player7, player8] = indianPlayers;
  const oddTeam = [player1, player3, player5, player7];
  const evenTeam = [player2, player4, player6, player8];

  // Two separate arrays
  const T20players = ['T20 Player 1', 'T20 Player 2', 'T20 Player 3'];
  const RanjiTrophyPlayers = ['Ranji Player 1', 'Ranji Player 2', 'Ranji Player 3'];

  // Merge the two arrays
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>All Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;