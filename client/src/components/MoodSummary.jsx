// src/Components/MoodSummary.jsx
import React from "react";
import "./MoodSummary.css";

const MoodSummary = () => {
  const summaryData = [
    {
      label: "Most Common Mood",
      value: "😊",
      description: "Happy",
    },
    {
      label: "Average Mood",
      value: "5.7",
      description: "/ 7",
    },
    {
      label: "Mood Streak",
      value: "3 Days",
      description: "Logged consecutively",
    },
    {
      label: "Last Mood Logged",
      value: "😌",
      description: "Yesterday",
    },
  ];

  return (
    <div className="mood-summary-container">
      {summaryData.map((item, index) => (
        <div key={index} className="mood-summary-card">
          <div className="mood-value">{item.value}</div>
          <div className="mood-label">{item.label}</div>
          <div className="mood-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default MoodSummary;
