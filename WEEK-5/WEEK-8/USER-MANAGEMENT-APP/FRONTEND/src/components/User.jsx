import React from 'react';
import { useParams } from 'react-router';

function User() {
  const { id } = useParams();
  return (
    <div className="py-20">
      <h2 className="text-2xl font-semibold mb-4">User Detail</h2>
      <p className="text-gray-600">User ID: {id}</p>
    </div>
  );
}

export default User;