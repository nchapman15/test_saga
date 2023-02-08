import React from 'react';

const UsersList = ({ users }) => {
    if (users.length === 0) {
        users = [{'User': 'Carm'}, {'User': 'Edna'}, {'User': 'Joanne'}];
    }
    return (
        <div>
        <ul>{users[0].User}</ul>
        <ul>{users[1].User}</ul>
        <ul>{users[2].User}</ul>
        </div>
    );
};

export default UsersList;
