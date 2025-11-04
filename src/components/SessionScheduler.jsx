import React, { useState } from "react";
import "./SessionScheduler.css";

function SessionScheduler() {
  const [sessions, setSessions] = useState([
    { id: 1, date: "2025-11-05", time: "10:00 AM", coach: "Coach Arjun", location: "Ground A" },
    { id: 2, date: "2025-11-06", time: "4:00 PM", coach: "Coach Meera", location: "Community Center" },
  ]);

  const [newSession, setNewSession] = useState({
    date: "",
    time: "",
    coach: "",
    location: "",
  });

  const handleAddSession = () => {
    if (!newSession.date || !newSession.time || !newSession.coach) return;
    const newEntry = { id: sessions.length + 1, ...newSession };
    setSessions([...sessions, newEntry]);
    setNewSession({ date: "", time: "", coach: "", location: "" });
  };

  return (
    <div className="session-scheduler-container">
      <h2>Session Scheduler</h2>

      <div className="add-session-form">
        <input
          type="date"
          value={newSession.date}
          onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
        />
        <input
          type="time"
          value={newSession.time}
          onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Coach Name"
          value={newSession.coach}
          onChange={(e) => setNewSession({ ...newSession, coach: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newSession.location}
          onChange={(e) => setNewSession({ ...newSession, location: e.target.value })}
        />
        <button onClick={handleAddSession}>Add Session</button>
      </div>

      <table className="session-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Coach</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr key={s.id}>
              <td>{s.date}</td>
              <td>{s.time}</td>
              <td>{s.coach}</td>
              <td>{s.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SessionScheduler;
