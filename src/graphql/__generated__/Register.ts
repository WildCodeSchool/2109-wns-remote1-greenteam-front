/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  __typename: "UserResponse";
  statusCode: number;
  message: string;
  token: string | null;
}

export interface Register {
  register: Register_register;
}

export interface RegisterVariables {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}
