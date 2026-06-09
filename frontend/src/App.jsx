import { useState } from 'react';

function App() {
  const [goal, setGoal] = useState('');
  const [skills, setSkills] = useState('');
  const [reply, setReply] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goal, skills }),
    });
    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div>
      <h1>AI Career Navigator</h1>
      <input placeholder="Goal" onChange={(e) => setGoal(e.target.value)} />
      <input placeholder="Skills" onChange={(e) => setSkills(e.target.value)} />
      <button onClick={handleSubmit}>Get Advice</button>
      <p>{reply}</p>
    </div>
  );
}

export default App;
