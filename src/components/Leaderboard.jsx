import React, { useState } from "react";
import "./Leaderboard.css";

function Leaderboard() {
  const [leaders, setLeaders] = useState([
    { id: 1, name: "Aarav Nair", points: 98 },
    { id: 2, name: "Diya Menon", points: 95 },
    { id: 3, name: "Kiran Raj", points: 89 },
    { id: 4, name: "Sneha Kumar", points: 85 },
    { id: 5, name: "Vikram Das", points: 80 },
  ]);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaders
            .sort((a, b) => b.points - a.points)
            .map((leader, index) => (
              <tr key={leader.id}>
                <td>#{index + 1}</td>
                <td>{leader.name}</td>
                <td>{leader.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
