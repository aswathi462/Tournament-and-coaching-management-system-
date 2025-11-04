import React, { useState } from "react";
import "./CoachingManager.css";

function CoachingManager() {
  const [coaches, setCoaches] = useState([
    {
      id: 1,
      name: "Coach Arjun",
      sessions: 12,
      assignedChildren: ["Aarav", "Diya", "Kiran"],
      workload: 75, // percentage
    },
    {
      id: 2,
      name: "Coach Meera",
      sessions: 10,
      assignedChildren: ["Sneha", "Anaya"],
      workload: 60,
    },
    {
      id: 3,
      name: "Coach Ravi",
      sessions: 15,
      assignedChildren: ["Kiran", "Vikram", "Riya", "Diya"],
      workload: 85,
    },
  ]);

  const [newCoach, setNewCoach] = useState({ name: "", sessions: 0 });

  const handleAddCoach = () => {
    if (newCoach.name.trim() === "") return;
    const newEntry = {
      id: coaches.length + 1,
      name: newCoach.name,
      sessions: Number(newCoach.sessions),
      assignedChildren: [],
      workload: 0,
    };
    setCoaches([...coaches, newEntry]);
    setNewCoach({ name: "", sessions: 0 });
  };

  return (
    <div className="coaching-manager-container">
      <h2>Coaching Manager</h2>

      <div className="add-coach-form">
        <input
          type="text"
          placeholder="Coach Name"
          value={newCoach.name}
          onChange={(e) => setNewCoach({ ...newCoach, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Sessions"
          value={newCoach.sessions}
          onChange={(e) => setNewCoach({ ...newCoach, sessions: e.target.value })}
        />
        <button onClick={handleAddCoach}>Add Coach</button>
      </div>

      <div className="coach-list">
        {coaches.map((coach) => (
          <div key={coach.id} className="coach-card">
            <h3>{coach.name}</h3>
            <p><strong>Sessions:</strong> {coach.sessions}</p>
            <p><strong>Assigned Children:</strong> {coach.assignedChildren.join(", ") || "None"}</p>
            <div className="workload-bar">
              <div
                className="workload-fill"
                style={{ width: `${coach.workload}%` }}
              ></div>
            </div>
            <p className="workload-label">Workload: {coach.workload}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachingManager;
