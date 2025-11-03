import React, { useState } from "react";

function RegistrationForm() {
  const [type, setType] = useState("player");
  const [name, setName] = useState("");

  const handleRegister = () => {
    // API request or state update
    alert(`Registered ${type}: ${name}`);
  };

  return (
    <div className="p-6 bg-white shadow rounded border">
      <h2 className="text-xl text-blue-500 mb-4">Register Player/Team</h2>
      <select value={type} onChange={e => setType(e.target.value)} className="p-2 mb-4 border rounded">
        <option value="player">Player</option>
        <option value="team">Team</option>
      </select>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
        className="p-2 mb-4 border rounded w-64" />
      <button onClick={handleRegister} className="bg-blue-500 text-white px-6 py-2 rounded">Register</button>
    </div>
  );
}

export default RegistrationForm;
