import React from 'react';

const ListofPlayers = () => {
  // Array of 11 players with names and scores
  const players = [
    { name: 'Player 1', score: 85 },
    { name: 'Player 2', score: 62 },
    { name: 'Player 3', score: 91 },
    { name: 'Player 4', score: 45 },
    { name: 'Player 5', score: 78 },
    { name: 'Player 6', score: 53 },
    { name: 'Player 7', score: 69 },
    { name: 'Player 8', score: 82 },
    { name: 'Player 9', score: 71 },
    { name: 'Player 10', score: 58 },
    { name: 'Player 11', score: 90 }
  ];

  // Filter players with scores below 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Scores Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;