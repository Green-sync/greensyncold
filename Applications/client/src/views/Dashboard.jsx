import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';
import UserCard from '../components/UserCard';

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.getUsers.map((user) => (
          <UserCard key={user.userId} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
