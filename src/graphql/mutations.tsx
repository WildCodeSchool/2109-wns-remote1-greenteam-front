import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      statusCode
      message
      token
    }
  }
`

export const REGISTER = gql`
  mutation Register($firstname: String!, $lastname: String!, $password: String!, $email: String!) {
    register(
      firstname: $firstname
      lastname: $lastname
      password: $password
      email: $email
    ) {
      statusCode
      message
      token
    }
  }
`