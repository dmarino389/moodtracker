// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [moods, setMoods] = useState([]);
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/moods')
      .then(res => setMoods(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/moods', { mood, note });
    setMoods([...moods, response.data]);
    setMood('');
    setNote('');
  };

  return (
    <div>
      <h1>Mood Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input value={mood} onChange={e => setMood(e.target.value)} placeholder="Mood" required />
        <input value={note} onChange={e => setNote(e.target.value)} placeholder="Note" />
        <button type="submit">Add Mood</button>
      </form>
      <ul>
        {moods.map((entry, index) => (
          <li key={index}>
            <strong>{entry.mood}</strong>: {entry.note} — <em>{new Date(entry.date).toLocaleString()}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

