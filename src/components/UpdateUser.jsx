// src/components/UpdateUser.jsx
import  { useState } from 'react';

function UpdateUser() {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const updateUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      const data = await response.json();
      setMessage(`User updated: ${data.name}`);
      setUserId('');
      setName('');
      setEmail('');
    } else {
      setMessage('Failed to update user');
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="number"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={updateUser}>Update</button>
      <p>{message}</p>
    </div>
  );
}

export default UpdateUser;
