import React from 'react'

const UserCard = ({user,onPromote}) => {
  return(
   <div >
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
      <button onClick={() => onPromote(user.id)}>
        Promote
      </button>
    </div>
  )
}

export default UserCard
