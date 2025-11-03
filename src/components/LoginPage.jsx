import React, { useState } from "react";

function LoginPage({ setUser }) {
  const [role, setRole] = useState("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Replace with API authentication
    setUser({ role, username });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl text-blue-600 mb-6">Coaching Management Login</h1>
      <select value={role} onChange={e => setRole(e.target.value)} className="p-2 mb-4 border rounded">
        <option value="admin">Admin</option>
        <option value="coach">Coach</option>
        <option value="player">Player</option>
      </select>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}
        className="p-2 mb-2 border rounded w-64" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
        className="p-2 mb-6 border rounded w-64" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-6 py-2 rounded">Login</button>
    </div>
  );
}

export default LoginPage;
