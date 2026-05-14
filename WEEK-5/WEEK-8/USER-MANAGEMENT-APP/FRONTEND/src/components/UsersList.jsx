import React, { useState, useEffect } from 'react';
import { apiUrl } from '../api';

function UsersList() {
  let [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch(apiUrl('/user-api/users'), {
          method: "GET"
        })

        let data = await res.json()

        console.log(data) // check API response

        setUsers(data.payload)

      } catch (err) {
        console.error("Error fetching users:", err)
      }
    }

    getUsers()
  }, [])

  return (
    <div className="py-20">
      <h2 className="text-2xl font-semibold mb-4">Users List</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li className="p-3 border rounded mb-1" key={index}>
              {user.name} - {user.email} - {user.mobileNumber}
            </li> 
          ))}
        </ul>
      )}

    </div>
  )
}

export default UsersList
