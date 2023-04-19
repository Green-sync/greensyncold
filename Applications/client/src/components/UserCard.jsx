// import React from 'react';
import { Link } from 'react-router-dom';

// const UserCard = ({ user }) => (
//   <div className="bg-white shadow-md rounded p-4">
//     <h2 className="font-bold text-xl mb-2">{user.displayName}</h2>
//     <p className="text-gray-600">{user.email}</p>
//     <p className="text-gray-600">{user.role}</p>
//     <Link
//       to={`/users/${user.userId}/farms`}
//       className="bg-blue-600 text-white mt-4 inline-block rounded px-4 py-2"
//     >
//       View Farms
//     </Link>
//   </div>
// );

// export default UserCard;


import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        className="profile-image"
        src={user.profileImageURL || 'https://via.placeholder.com/150'}
        alt={user.displayName}
      />
      <div className="user-info">
        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
        <p>{user.role}</p>
        <Link
            to={`/users/${user.userId}/farms`}
            className="bg-blue-600 text-white mt-4 inline-block rounded px-4 py-2"
          >
            View Farms
          </Link>
      </div>
    </div>
  );
};

export default UserCard;
