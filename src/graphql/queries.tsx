import { gql } from '@apollo/client';

export const GET_ONE_USER = gql`
  query GetOneUser {
    getOneUser(email: $email) {
      id
      firstName
      lastName
      email
    }
  }
`

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    getAllProjects {
      id
      title
      description
    }
  }
`