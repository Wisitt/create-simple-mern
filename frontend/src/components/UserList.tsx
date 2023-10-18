import React, { useEffect, useState } from 'react';

const UserList: React.FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/api/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []);

    return (
        <div>
        <h1>User List</h1>
        <ul>
            {users.map((user: any) => (
            <li key={user.id}>{user.username}</li>
            ))}
        </ul>
        </div>
    );
};

export default UserList;
