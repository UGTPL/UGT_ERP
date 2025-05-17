import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SessionMaster.css';  // <-- import your CSS here

function SessionMaster() {
  const [sessions, setSessions] = useState([]);
  const [newSession, setNewSession] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = () => {
    axios.get('http://localhost:8082/getAllSessions')
      .then((res) => setSessions(res.data))
      .catch((err) => console.error('Error fetching sessions:', err));
  };

  const handleAddSession = () => {
    setSuccessMsg('');
    setErrorMsg('');

    if (!newSession.trim()) {
      setErrorMsg('Session name cannot be empty.');
      return;
    }

    const exists = sessions.some(
      (s) => s.name.toLowerCase() === newSession.trim().toLowerCase()
    );

    if (exists) {
      setErrorMsg('Session already exists.');
      return;
    }

    const payload = { name: newSession };

    axios.post('http://localhost:8082/createSessions', payload)
      .then((res) => {
        setSessions([...sessions, res.data]);
        setNewSession('');
        setSuccessMsg('Session created successfully!');
      })
      .catch((err) => {
        setErrorMsg('Failed to create session. Please try again.');
        console.error('Error adding session:', err);
      });
  };

  return (
    <div className="session-master-wrapper">
      <div className="session-master-container">
        <h2>Session Master</h2>

        {successMsg && <div className="success-message">{successMsg}</div>}
        {errorMsg && <div className="error-message">{errorMsg}</div>}

        <table>
          <thead>
            <tr>
              <th>Session Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={index}>
                <td>{session.name}</td>
                <td>-</td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  value={newSession}
                  placeholder="e.g. 2024-2025"
                  onChange={(e) => setNewSession(e.target.value)}
                />
              </td>
              <td>
                <button onClick={handleAddSession}>Add Session</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SessionMaster;
