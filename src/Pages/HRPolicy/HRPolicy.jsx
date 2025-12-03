import React from "react";
import './HRPolicy.css';

function HRPolicy() {
  return (
    <div className="policy-container">
      <h2>HR Policies</h2>
      <ul>
        <li>Leave Policy: Employees are entitled to 20 leave days per year.</li>
        <li>Attendance Policy: Punctuality is mandatory.</li>
        <li>Work From Home: Available with manager approval.</li>
        <li>Code of Conduct: Maintain professionalism at all times.</li>
      </ul>
    </div>
  );
}

export default HRPolicy;