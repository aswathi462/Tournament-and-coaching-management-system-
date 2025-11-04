import React, { useState } from "react";
import "./AttendanceTracker.css";

function AttendanceTracker() {
  const [attendance, setAttendance] = useState([
    { id: 1, name: "Aarav", present: false },
    { id: 2, name: "Diya", present: true },
    { id: 3, name: "Kiran", present: false },
    { id: 4, name: "Sneha", present: true },
  ]);

  const toggleAttendance = (id) => {
    setAttendance((prev) =>
      prev.map((child) =>
        child.id === id ? { ...child, present: !child.present } : child
      )
    );
  };

  const totalPresent = attendance.filter((a) => a.present).length;

  return (
    <div className="attendance-container">
      <h2>Attendance Tracker</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Child Name</th>
            <th>Status</th>
            <th>Mark Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((child) => (
            <tr key={child.id}>
              <td>{child.name}</td>
              <td>{child.present ? "Present" : "Absent"}</td>
              <td>
                <button
                  className={child.present ? "present-btn" : "absent-btn"}
                  onClick={() => toggleAttendance(child.id)}
                >
                  {child.present ? "Unmark" : "Mark Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="attendance-summary">
        <p>
          Total Present: <strong>{totalPresent}</strong> / {attendance.length}
        </p>
      </div>
    </div>
  );
}

export default AttendanceTracker;
