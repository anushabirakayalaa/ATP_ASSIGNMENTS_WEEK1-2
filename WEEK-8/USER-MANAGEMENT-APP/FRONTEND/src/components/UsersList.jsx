import React from 'react';

function UsersList() {
    let [users,setUsers]=useState([])

    useEffect(()=>
    {
        async function getUsers()
        {
            try{
                let res = await fetch("http://localhost:4000/user-api/users"),
                 {
                  method:"GET",
                }
            }
        }
    })
  return (
    <div className="py-20">
      <h2 className="text-2xl font-semibold mb-4">Users List</h2>
      <p className="text-gray-600">(User list will be displayed here.)</p>
    </div>
  );
}

export default UsersList;