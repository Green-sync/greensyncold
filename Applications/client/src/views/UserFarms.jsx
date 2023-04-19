import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_FARMS_BY_USER_ID } from '../graphql/queries';

const UserFarms = () => {
  const { userId } = useParams();
  const { loading, error, data } = useQuery(GET_FARMS_BY_USER_ID, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Farms</h1>
      <ul>
        {data.getFarmsByUserId.map((farm) => (
          <li key={farm.farmId}>
            <h2>{farm.name}</h2>
            <p>{farm.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFarms;
