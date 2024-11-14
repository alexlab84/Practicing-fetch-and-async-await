// src/components/DeleteUser.jsx
import  { useState } from 'react';

function DeleteUser() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const deleteUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setMessage(`User with ID ${userId} deleted`);
      setUserId('');  // Limpiamos el campo de ID de usuario después de la eliminación
    } else {
      setMessage('Failed to delete user');
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="number"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={deleteUser}>Delete</button>
      <p>{message}</p>
    </div>
  );
}

export default DeleteUser;
