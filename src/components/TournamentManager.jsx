import React, { useState } from "react";
import "./TournamentManager.css";

function TournamentManager() {
  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: "Community Cup",
      date: "2025-11-15",
      teams: ["Team A", "Team B", "Team C", "Team D"],
      winner: "Team B",
    },
    {
      id: 2,
      name: "Junior League",
      date: "2025-12-02",
      teams: ["Team X", "Team Y"],
      winner: "TBD",
    },
  ]);

  const [newTournament, setNewTournament] = useState({
    name: "",
    date: "",
    teams: "",
  });

  const handleAddTournament = () => {
    if (!newTournament.name || !newTournament.date) return;
    const teamsArr = newTournament.teams
      ? newTournament.teams.split(",").map((t) => t.trim())
      : [];
    const newEntry = {
      id: tournaments.length + 1,
      ...newTournament,
      teams: teamsArr,
      winner: "TBD",
    };
    setTournaments([...tournaments, newEntry]);
    setNewTournament({ name: "", date: "", teams: "" });
  };

  return (
    <div className="tournament-container">
      <h2>Tournament Manager</h2>

      <div className="add-tournament-form">
        <input
          type="text"
          placeholder="Tournament Name"
          value={newTournament.name}
          onChange={(e) =>
            setNewTournament({ ...newTournament, name: e.target.value })
          }
        />
        <input
          type="date"
          value={newTournament.date}
          onChange={(e) =>
            setNewTournament({ ...newTournament, date: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Teams (comma separated)"
          value={newTournament.teams}
          onChange={(e) =>
            setNewTournament({ ...newTournament, teams: e.target.value })
          }
        />
        <button onClick={handleAddTournament}>Add Tournament</button>
      </div>

      <table className="tournament-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Teams</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {tournaments.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.date}</td>
              <td>{t.teams.join(", ")}</td>
              <td>{t.winner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TournamentManager;
