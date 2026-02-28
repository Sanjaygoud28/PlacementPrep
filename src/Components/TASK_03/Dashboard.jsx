import React from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
const Dashboard = () => {
const [users, setUsers] = useState([
    { id: 1, name: "Sanjay", role: "Junior" },
    { id: 2, name: "Amit", role: "Junior" },
    { id: 3, name: "Priya", role: "Junior" },
  ]);

  const handlePromote = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, role: "Senior" } 
          : user
      )
    );
  };
  return (
    <div>
      <h2>User Dashboard</h2>

      {users.map((user) => (
        <UserCard
          key={user.id}   
          user={user}
          onPromote={handlePromote}
        />
      ))}
    </div>
  )
}

export default Dashboard
