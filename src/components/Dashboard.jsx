import React from "react";
import "./Dashboard.css";
import RegistrationForm from "./RegistrationForm";
import TournamentManager from "./TournamentManager";
import CoachingManager from "./CoachingManager";
import ReportGenerator from "./ReportGenerator";
import AttendanceTracker from "./AttendanceTracker"; // ✅ New import

function Dashboard({ user, setUser }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <span>
          Welcome, {user.username} ({user.role})
        </span>
        <button onClick={() => setUser(null)} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        {/* ----------------- ADMIN VIEW ----------------- */}
        {user.role === "admin" && (
          <>
            <div className="dashboard-section">
              <RegistrationForm />
            </div>

            <div className="dashboard-section">
              <TournamentManager />
            </div>

            <div className="dashboard-section">
              <CoachingManager />
            </div>

            {/* ✅ Added Attendance Tracker for Admin too */}
            <div className="dashboard-section">
              <AttendanceTracker />
            </div>

            <div className="dashboard-section">
              <ReportGenerator />
            </div>
          </>
        )}

        {/* ----------------- COACH VIEW ----------------- */}
        {user.role === "coach" && (
          <>
            <div className="dashboard-section">
              <CoachingManager />
            </div>

            {/* ✅ Attendance Tracker visible for coach */}
            <div className="dashboard-section">
              <AttendanceTracker />
            </div>

            <div className="dashboard-section">
              <ReportGenerator />
            </div>
          </>
        )}

        {/* ----------------- PLAYER VIEW ----------------- */}
        {user.role === "player" && (
          <>
            <div className="dashboard-section">
              <TournamentManager />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
