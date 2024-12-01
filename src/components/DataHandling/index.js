import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.scss";

const DataHandling = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerData, setPlayerData] = useState([]);
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const teamValue = params.get('team');
    
    if (teamValue) {
      axios.get(`cricketbackend-production-89f2.up.railway.app/api/v1/player?team=${encodeURIComponent(teamValue)}`)
        .then(response => {
          setPlayerData(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <div className = "table-container">
        <table>
          {/* col added */}
        <thead>
        <tr>
            <th>Name</th>
            <th>Nation</th>
            <th>Position</th>
            <th>Age</th>
            <th>Matches Played</th>
            <th>Innings</th>
            <th>Runs</th>
            <th>Balls</th>
            <th>Highest</th>
            <th>Strike Rate</th>
            <th>Average</th>
            <th>Not Out</th>
            <th>Fours</th>
            <th>Sixes</th>
            <th>Ducks</th>
            <th>Fifties</th>
            <th>Hundreds</th>
            <th>200s</th>
            <th>Wickets Taken</th>
            <th>Balls Delivered</th>
            <th>Runs as Bowler</th>
            <th>Maiden Overs</th>
            <th>Bowling Average</th>
            <th>Economy</th>
            <th>Bowling Strike Rate</th>
            <th>4-Wicket Hauls</th>
            <th>5+ Wicket Hauls</th>
            <th>Minutes Played</th>
            <th>Team</th>
        </tr>
    </thead>
    {/* col added */}
        <tbody>
            {playerData.map(player => (
               <tr key={player.name}>
               <td>{player.name}</td>
               <td>{player.nation}</td>
               <td>{player.pos}</td>
               <td>{player.age}</td>
               <td>{player.mp}</td>
               <td>{player.innings}</td>
               <td>{player.run}</td>
               <td>{player.ball}</td>
               <td>{player.highest}</td>
               <td>{player.sr}</td>
               <td>{player.average}</td>
               <td>{player.notout}</td>
               <td>{player.fours}</td>
               <td>{player.six}</td>
               <td>{player.duck}</td>
               <td>{player.fifty}</td>
               <td>{player.hundred}</td>
               <td>{player.twoHundred}</td>
               <td>{player.wicket_taken}</td>
               <td>{player.ball_delivered}</td>
               <td>{player.run_as_bowler}</td>
               <td>{player.maiden}</td>
               <td>{player.average_ball}</td>
               <td>{player.economy}</td>
               <td>{player.sr_ball}</td>
               <td>{player.fourwicket}</td>
               <td>{player.plusfourwicket}</td>
               <td>{player.minutesPlayed}</td>
               <td>{player.team}</td>
           </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
  
};

export default DataHandling;
