import React, { useState } from "react";
import LoginPage from "./components/LoginPage.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      {!user ? (
        <LoginPage setUser={setUser} />
      ) : (
        <Dashboard user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
