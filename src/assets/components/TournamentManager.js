import React, { useState } from "react";
import Leaderboard from "./Leaderboard";

function TournamentManager() {
  // Replace with API state
  const [teams, setTeams] = useState([]);
  const [scores, setScores] = useState([]);

  return (
    <div className="p-6 bg-white shadow rounded border">
      <h2 className="text-xl text-blue-500 mb-4">Tournament Management</h2>
      {/* Registration/Approval UI */}
      {/* Scoreboard */}
      <Leaderboard scores={scores} />
    </div>
  );
}

export default TournamentManager;
