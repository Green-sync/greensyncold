import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_FARM } from '../graphql/queries';

const FarmDetails = () => {
  const { farmId } = useParams();
  const { loading, error, data } = useQuery(GET_FARM, { variables: { farmId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { getFarm: farm } = data;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{farm.name}</h1>
      <p>{farm.description}</p>
      <div className="mt-4">
        <Link
          to={`/farms/${farmId}/crops`}
          className="bg-blue-600 text-white inline-block rounded px-4 py-2 mr-2">
            View Crops
          </Link>
          <Link 
           to={`/farms/${farmId}/livestock`} 
           className="bg-blue-600 text-white inline-block rounded px-4 py-2 mr-2"
           >View Livestock</Link>
           <Link 
           to={`/farms/${farmId}/weather-data`}
           className="bg-blue-600 text-white inline-block rounded px-4 py-2 mr-2">
            View Weather Data
           </Link>
           <Link 
           to={`/farms/${farmId}/iot-devices`}
           className="bg-blue-600 text-white inline-block rounded px-4 py-2">
            View IoT Devices
           </Link>
        </div>
    </div> 
  )
};

export default FarmDetails 

