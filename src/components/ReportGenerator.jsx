import React, { useState } from "react";
import "./ReportGenerator.css";

function ReportGenerator() {
  const [reports, setReports] = useState({
    totalChildren: 25,
    totalCoaches: 5,
    sessionsThisMonth: 18,
    averageAttendance: 91,
    genderRatio: { male: 14, female: 11 },
    impactScore: 87,
  });

  return (
    <div className="report-generator-container">
      <h2>Report Generator</h2>
      <div className="report-grid">
        <div className="report-card">
          <h3>Total Children</h3>
          <p>{reports.totalChildren}</p>
        </div>
        <div className="report-card">
          <h3>Total Coaches</h3>
          <p>{reports.totalCoaches}</p>
        </div>
        <div className="report-card">
          <h3>Sessions This Month</h3>
          <p>{reports.sessionsThisMonth}</p>
        </div>
        <div className="report-card">
          <h3>Average Attendance</h3>
          <p>{reports.averageAttendance}%</p>
        </div>
        <div className="report-card">
          <h3>Gender Ratio</h3>
          <p>
            {reports.genderRatio.male} ♂ / {reports.genderRatio.female} ♀
          </p>
        </div>
        <div className="report-card">
          <h3>Community Impact Score</h3>
          <p>{reports.impactScore}/100</p>
        </div>
      </div>

      <div className="report-summary">
        <h3>Insights Summary</h3>
        <ul>
          <li>🏅 Participation levels remain high across all age groups.</li>
          <li>👩‍🏫 Female participation increased by 10% this quarter.</li>
          <li>📅 Average of {reports.sessionsThisMonth} sessions this month.</li>
          <li>🎯 Impact score indicates strong community engagement.</li>
        </ul>
      </div>
    </div>
  );
}

export default ReportGenerator;
