import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClassSection.css';

const Classsection = () => {
  const [sessions, setSessions] = useState([]);
  const [selectedSessionId, setSelectedSessionId] = useState('');
  const [name, setClassName] = useState('');

  // Fetch all session names on load
  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await axios.get('http://localhost:8082/getAllSessions');
      setSessions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  const handleSave = async () => {
    if (!selectedSessionId || !name.trim()) {
      alert('Please select a session and enter a class name.');
      return;
    }

    try {
      await axios.post('http://localhost:8082/createClass', {
        name,
        sessionId: selectedSessionId
      });

      alert('Class saved successfully!');
      setClassName('');
      setSelectedSessionId('');
    } catch (error) {
      console.error('Error saving class:', error);
      alert('Failed to save class.');
    }
  };

  return (
    <div className="master-container">
      <h2 className="classmaster-h2">Add Class Under Session</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>Select Session: </label>
        <select
          value={selectedSessionId}
          onChange={(e) => setSelectedSessionId(e.target.value)}
        >
          <option value="">-- Select Session --</option>
          {sessions.map((session) => (
            <option key={session.id} value={session.id}>
              {session.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Enter Class Name: </label>
        <input
          type="text"
          placeholder="e.g., Class 1A"
          value={name}
          onChange={(e) => setClassName(e.target.value)}
        />
      </div>

      <button onClick={handleSave}>Save Class</button>
    </div>
  );
};

export default Classsection;
