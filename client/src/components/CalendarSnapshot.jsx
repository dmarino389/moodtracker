import React from 'react';
import './CalendarSnapshot.css';

const moodData = [
  { day: 'Mon', emoji: '😊' },
  { day: 'Tue', emoji: '😳' },
  { day: 'Wed', emoji: '😌' },
  { day: 'Thu', emoji: '😊' },
  { day: 'Fri', emoji: '😝' },
  { day: 'Sat', emoji: '😳' },
  { day: 'Sun', emoji: '—' },
];

const CalendarSnapshot = () => {
  return (
    <div className="calendar-container">
      <h3>Last 7 Days</h3>
      <div className="calendar-grid">
        {moodData.map((entry, index) => (
          <div className="calendar-day" key={index}>
            <span className="calendar-label">{entry.day}</span>
            <span className="calendar-emoji">{entry.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSnapshot;
