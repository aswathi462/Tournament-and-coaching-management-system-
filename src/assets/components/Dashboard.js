import React from "react";
import RegistrationForm from "./RegistrationForm";
import TournamentManager from "./TournamentManager";
import CoachingManager from "./CoachingManager";
import ReportGenerator from "./ReportGenerator";

function Dashboard({ user, setUser }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-between items-center p-4 border-b bg-blue-500 text-white">
        <span>Welcome, {user.username} ({user.role})</span>
        <button onClick={() => setUser(null)} className="px-4 py-2 bg-white text-blue-600 rounded">Logout</button>
      </div>
      <div className="p-4 space-y-6">
        {user.role === "admin" && (
          <>
            <RegistrationForm />
            <TournamentManager />
            <CoachingManager />
            <ReportGenerator />
          </>
        )}
        {user.role === "coach" && (
          <>
            <CoachingManager />
            <ReportGenerator />
          </>
        )}
        {user.role === "player" && (
          <>
            <TournamentManager />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
