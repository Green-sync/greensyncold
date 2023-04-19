import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      userId
      email
      displayName
      role
    }
  }
`;

export const GET_FARM = gql`
  query GetFarm($farmId: ID!) {
    getFarm(farmId: $farmId) {
      farmId
      userId
      name
      location {
        latitude
        longitude
      }
      size
      description
      dateCreated
    }
  }
`;

export const GET_FARMS_BY_USER_ID = gql`
  query GetFarmsByUserId($userId: ID!) {
    getFarmsByUserId(userId: $userId) {
      farmId
      name
      description
    }
  }
`;
