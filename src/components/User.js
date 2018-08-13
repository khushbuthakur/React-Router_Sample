import React from 'react';

const User = (userObject) => {
    return (
        // getting props
        <h2>Hello user {userObject.userObject.match.params.userName}</h2>
    );
}

export default User;

