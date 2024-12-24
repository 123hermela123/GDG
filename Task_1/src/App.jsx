import React from 'react';
import './App.css';
const App = () => {

  const members = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

  return (
    <div className='main'>
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
