import React, { useState } from "react";
import "./ChildProfile.css";

function ChildProfile() {
  const [selectedChild, setSelectedChild] = useState(null);

  const childrenData = [
    {
      id: 1,
      name: "Aarav Nair",
      age: 10,
      gender: "Male",
      attendance: 92,
      lsasScore: 78,
      transfers: 1,
      homeVisits: 3,
      notes: "Shows strong leadership and teamwork skills.",
    },
    {
      id: 2,
      name: "Diya Menon",
      age: 9,
      gender: "Female",
      attendance: 96,
      lsasScore: 85,
      transfers: 0,
      homeVisits: 2,
      notes: "Excellent progress in communication and coordination.",
    },
    {
      id: 3,
      name: "Kiran Raj",
      age: 11,
      gender: "Male",
      attendance: 88,
      lsasScore: 70,
      transfers: 2,
      homeVisits: 1,
      notes: "Needs improvement in regular attendance.",
    },
  ];

  return (
    <div className="child-profile-container">
      <h2>Child Profiles</h2>

      {!selectedChild ? (
        <>
          <p>Select a child to view their profile:</p>
          <div className="child-list">
            {childrenData.map((child) => (
              <div
                key={child.id}
                className="child-card"
                onClick={() => setSelectedChild(child)}
              >
                <h3>{child.name}</h3>
                <p>Age: {child.age}</p>
                <p>Attendance: {child.attendance}%</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="child-details">
          <button className="back-btn" onClick={() => setSelectedChild(null)}>
            ← Back
          </button>

          <h3>{selectedChild.name}</h3>
          <p><strong>Age:</strong> {selectedChild.age}</p>
          <p><strong>Gender:</strong> {selectedChild.gender}</p>
          <p><strong>Attendance:</strong> {selectedChild.attendance}%</p>
          <p><strong>LSAS Assessment:</strong> {selectedChild.lsasScore}</p>
          <p><strong>Transfers:</strong> {selectedChild.transfers}</p>
          <p><strong>Home Visits:</strong> {selectedChild.homeVisits}</p>
          <p><strong>Notes:</strong> {selectedChild.notes}</p>
        </div>
      )}
    </div>
  );
}

export default ChildProfile;
