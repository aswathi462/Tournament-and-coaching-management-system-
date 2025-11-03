import React from "react";
import AttendanceTracker from "./AttendanceTracker";
import SessionScheduler from "./SessionScheduler";
import ChildProfile from "./ChildProfile";

function CoachingManager() {
  return (
    <div className="p-6 bg-white shadow rounded border">
      <h2 className="text-xl text-blue-500 mb-4">Coaching Manager</h2>
      <SessionScheduler />
      <AttendanceTracker />
      <ChildProfile />
    </div>
  );
}

export default CoachingManager;
