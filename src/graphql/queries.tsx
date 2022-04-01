import { gql } from '@apollo/client';

export const GET_ONE_USER = gql`
  query GetOneUser($email: String!) {
    getOneUser(email: $email) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    getAllProjects {
      id
      title
      description
    }
  }
`;

export const VERIFY_USER = gql`
  query VerifyUser {
    verifyUser {
      id
      email
      lastName
      firstName
      age
      # notifications
    }
  }
`;

export const LOGOUT = gql`
  query LogoutUser {
    logout {
      statusCode
      message
    }
  }
`;
