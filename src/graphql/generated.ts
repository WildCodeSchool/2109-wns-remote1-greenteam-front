/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  id: Scalars['ID'];
  ticket: Ticket;
  user: User;
};

export type CommentInput = {
  content: Scalars['String'];
  id: Scalars['ID'];
  ticket: TicketInput;
  user: UserInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserToProject: UserToProject;
  createComment: Comment;
  createNotification: Notification;
  createProject: Project;
  createSprint: Sprint;
  createTicket: Ticket;
  deleteAllCommentsByUser: Array<Comment>;
  deleteAllProjects: Array<Project>;
  deleteAllSprints: Sprint;
  deleteAllTicketsByProject: Scalars['Boolean'];
  deleteAllTicketsBySprint: Scalars['Boolean'];
  deleteComment: Comment;
  deleteNotification: Notification;
  deleteProject: Project;
  deleteRoleOfUserByProject: UserToProject;
  deleteSprint: Sprint;
  deleteTicket: Ticket;
  deleteUser: User;
  login: UserResponse;
  register: UserResponse;
  removeUserFromProject: UserToProject;
  updateComment: Comment;
  updateRoleOfUserByProject: UserToProject;
  updateSprint: Sprint;
  updateTicket: Ticket;
  updateUser: User;
  updateproject: Project;
};


export type MutationAddUserToProjectArgs = {
  project: ProjectInput;
  role: UserRole;
  user: UserInput;
};


export type MutationCreateCommentArgs = {
  content: Scalars['String'];
  ticket: TicketInput;
  user: UserInput;
};


export type MutationCreateNotificationArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
  user: UserInput;
};


export type MutationCreateProjectArgs = {
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  picture: Scalars['String'];
  start_date: Scalars['DateTime'];
  title: Scalars['String'];
};


export type MutationCreateSprintArgs = {
  end_date: Scalars['DateTime'];
  start_date: Scalars['DateTime'];
  tickets: Array<TicketInput>;
};


export type MutationCreateTicketArgs = {
  description: Scalars['String'];
  estimated_timeframe: Scalars['DateTime'];
  project: ProjectInput;
  status: Scalars['Float'];
  title: Scalars['String'];
};


export type MutationDeleteAllCommentsByUserArgs = {
  user: UserInput;
};


export type MutationDeleteAllTicketsByProjectArgs = {
  project: Array<ProjectInput>;
};


export type MutationDeleteAllTicketsBySprintArgs = {
  sprint: Array<SprintInput>;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['Float'];
  user: UserInput;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteRoleOfUserByProjectArgs = {
  project: ProjectInput;
  user: UserInput;
};


export type MutationDeleteSprintArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteTicketArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRemoveUserFromProjectArgs = {
  project: ProjectInput;
  user: UserInput;
};


export type MutationUpdateCommentArgs = {
  content: Scalars['String'];
  id: Scalars['Float'];
  user: UserInput;
};


export type MutationUpdateRoleOfUserByProjectArgs = {
  project: ProjectInput;
  role: UserRole;
  user: UserInput;
};


export type MutationUpdateSprintArgs = {
  end_date: Scalars['DateTime'];
  id: Scalars['Float'];
  start_date: Scalars['DateTime'];
  tickets: Array<TicketInput>;
};


export type MutationUpdateTicketArgs = {
  description: Scalars['String'];
  estimated_timeframe: Scalars['DateTime'];
  id: Scalars['Float'];
  project: ProjectInput;
  sprint: SprintInput;
  status: Scalars['Float'];
  title: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateprojectArgs = {
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id: Scalars['ID'];
  picture: Scalars['String'];
  start_date: Scalars['DateTime'];
  tickets: Array<TicketInput>;
  title: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  user: User;
};

export type NotificationInput = {
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  user: UserInput;
};

export type Project = {
  __typename?: 'Project';
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id: Scalars['ID'];
  picture: Scalars['String'];
  start_date: Scalars['DateTime'];
  tickets: Array<Ticket>;
  title: Scalars['String'];
};

export type ProjectInput = {
  description: Scalars['String'];
  end_date: Scalars['DateTime'];
  id: Scalars['ID'];
  picture: Scalars['String'];
  start_date: Scalars['DateTime'];
  tickets: Array<TicketInput>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllCommentsByTicket: Array<Comment>;
  getAllCommentsByUser: Array<Comment>;
  getAllNotificationsByUser: Array<Notification>;
  getAllProjects: Array<Project>;
  getAllProjectsByUser: Array<Project>;
  getAllProjectsByUserAndRole: Array<Project>;
  getAllTickets: Array<Ticket>;
  getAllTicketsByProject: Array<Ticket>;
  getAllTicketsBySprint: Array<Ticket>;
  getAllTicketsByStatus: Array<Ticket>;
  getAllUsers: Array<User>;
  getAllUsersByProject: Array<UserWithRole>;
  getAllUsersByProjectAndRole: Array<User>;
  getAllUsersByRole: Array<User>;
  getOneComment: Comment;
  getOneProject: Project;
  getOneTicket: Ticket;
  getOneUser: User;
  logout: UserResponse;
  verifyUser: User;
};


export type QueryGetAllCommentsByTicketArgs = {
  ticket: TicketInput;
};


export type QueryGetAllCommentsByUserArgs = {
  email: Scalars['String'];
};


export type QueryGetAllNotificationsByUserArgs = {
  user: UserInput;
};


export type QueryGetAllProjectsByUserArgs = {
  user: UserInput;
};


export type QueryGetAllProjectsByUserAndRoleArgs = {
  role: UserRole;
  user: UserInput;
};


export type QueryGetAllTicketsByProjectArgs = {
  project: ProjectInput;
};


export type QueryGetAllTicketsBySprintArgs = {
  sprint: SprintInput;
};


export type QueryGetAllTicketsByStatusArgs = {
  status: Scalars['Float'];
};


export type QueryGetAllUsersByProjectArgs = {
  projectId: Scalars['String'];
};


export type QueryGetAllUsersByProjectAndRoleArgs = {
  project: ProjectInput;
  role: UserRole;
};


export type QueryGetAllUsersByRoleArgs = {
  role: UserRole;
};


export type QueryGetOneCommentArgs = {
  id: Scalars['Float'];
};


export type QueryGetOneProjectArgs = {
  id: Scalars['ID'];
};


export type QueryGetOneTicketArgs = {
  id: Scalars['Float'];
};


export type QueryGetOneUserArgs = {
  email: Scalars['String'];
};

export type Sprint = {
  __typename?: 'Sprint';
  end_date: Scalars['DateTime'];
  id: Scalars['ID'];
  start_date: Scalars['DateTime'];
  tickets: Array<Ticket>;
};

export type SprintInput = {
  end_date: Scalars['DateTime'];
  id: Scalars['ID'];
  start_date: Scalars['DateTime'];
  tickets: Array<TicketInput>;
};

export type Ticket = {
  __typename?: 'Ticket';
  comments: Array<Comment>;
  description: Scalars['String'];
  estimated_timeframe: Scalars['DateTime'];
  id: Scalars['ID'];
  project: Project;
  sprint: Sprint;
  status: Scalars['Float'];
  time_spent: Scalars['Float'];
  title: Scalars['String'];
};

export type TicketInput = {
  comments: Array<CommentInput>;
  description: Scalars['String'];
  estimated_timeframe: Scalars['DateTime'];
  id: Scalars['ID'];
  project: ProjectInput;
  sprint: SprintInput;
  status: Scalars['Float'];
  time_spent: Scalars['Float'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  notifications: Array<Notification>;
};

export type UserInput = {
  comments: Array<CommentInput>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  notifications: Array<NotificationInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  message: Scalars['String'];
  statusCode: Scalars['Float'];
  token: Maybe<Scalars['String']>;
};

/** The basic roles */
export enum UserRole {
  Admin = 'ADMIN',
  Developer = 'DEVELOPER',
  ProductManager = 'PRODUCT_MANAGER'
}

export type UserToProject = {
  __typename?: 'UserToProject';
  id: Scalars['ID'];
  project: Project;
  role: UserRole;
  user: User;
};

export type UserWithRole = {
  __typename?: 'UserWithRole';
  comments: Array<Comment>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  notifications: Array<Notification>;
  role: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', statusCode: number, message: string, token: string | null } };

export type RegisterMutationVariables = Exact<{
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', statusCode: number, message: string, token: string | null } };

export type GetOneUserQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetOneUserQuery = { __typename?: 'Query', getOneUser: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string } };

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProjectsQuery = { __typename?: 'Query', getAllProjects: Array<{ __typename?: 'Project', id: string, title: string, description: string }> };

export type VerifyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type VerifyUserQuery = { __typename?: 'Query', verifyUser: { __typename?: 'User', id: string, email: string, lastName: string, firstName: string } };

export type LogoutUserQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserQuery = { __typename?: 'Query', logout: { __typename?: 'UserResponse', statusCode: number, message: string } };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    statusCode
    message
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
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
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      firstname: // value for 'firstname'
 *      lastname: // value for 'lastname'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetOneUserDocument = gql`
    query GetOneUser($email: String!) {
  getOneUser(email: $email) {
    id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useGetOneUserQuery__
 *
 * To run a query within a React component, call `useGetOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetOneUserQuery(baseOptions: Apollo.QueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
      }
export function useGetOneUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, options);
        }
export type GetOneUserQueryHookResult = ReturnType<typeof useGetOneUserQuery>;
export type GetOneUserLazyQueryHookResult = ReturnType<typeof useGetOneUserLazyQuery>;
export type GetOneUserQueryResult = Apollo.QueryResult<GetOneUserQuery, GetOneUserQueryVariables>;
export const GetAllProjectsDocument = gql`
    query GetAllProjects {
  getAllProjects {
    id
    title
    description
  }
}
    `;

/**
 * __useGetAllProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options);
      }
export function useGetAllProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options);
        }
export type GetAllProjectsQueryHookResult = ReturnType<typeof useGetAllProjectsQuery>;
export type GetAllProjectsLazyQueryHookResult = ReturnType<typeof useGetAllProjectsLazyQuery>;
export type GetAllProjectsQueryResult = Apollo.QueryResult<GetAllProjectsQuery, GetAllProjectsQueryVariables>;
export const VerifyUserDocument = gql`
    query VerifyUser {
  verifyUser {
    id
    email
    lastName
    firstName
  }
}
    `;

/**
 * __useVerifyUserQuery__
 *
 * To run a query within a React component, call `useVerifyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useVerifyUserQuery(baseOptions?: Apollo.QueryHookOptions<VerifyUserQuery, VerifyUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyUserQuery, VerifyUserQueryVariables>(VerifyUserDocument, options);
      }
export function useVerifyUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyUserQuery, VerifyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyUserQuery, VerifyUserQueryVariables>(VerifyUserDocument, options);
        }
export type VerifyUserQueryHookResult = ReturnType<typeof useVerifyUserQuery>;
export type VerifyUserLazyQueryHookResult = ReturnType<typeof useVerifyUserLazyQuery>;
export type VerifyUserQueryResult = Apollo.QueryResult<VerifyUserQuery, VerifyUserQueryVariables>;
export const LogoutUserDocument = gql`
    query LogoutUser {
  logout {
    statusCode
    message
  }
}
    `;

/**
 * __useLogoutUserQuery__
 *
 * To run a query within a React component, call `useLogoutUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserQuery(baseOptions?: Apollo.QueryHookOptions<LogoutUserQuery, LogoutUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogoutUserQuery, LogoutUserQueryVariables>(LogoutUserDocument, options);
      }
export function useLogoutUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutUserQuery, LogoutUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogoutUserQuery, LogoutUserQueryVariables>(LogoutUserDocument, options);
        }
export type LogoutUserQueryHookResult = ReturnType<typeof useLogoutUserQuery>;
export type LogoutUserLazyQueryHookResult = ReturnType<typeof useLogoutUserLazyQuery>;
export type LogoutUserQueryResult = Apollo.QueryResult<LogoutUserQuery, LogoutUserQueryVariables>;