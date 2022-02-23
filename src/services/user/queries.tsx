import {gql} from '@apollo/client'



export const LOGIN_QUERY = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            statusCode,
            message,
            token,
        }
    } 
`

export const ADD_USER = gql`

    mutation Register($email: String!, $password: String!, $pseudo: String!){
        register(email: $email, password: $password, pseudo: $pseudo) {
            message,
            token
        }
    }
`

export interface UserResponse {
    statusCode: number;
    message: string
    token?: string
}