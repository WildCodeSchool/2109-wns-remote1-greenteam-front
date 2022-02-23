/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllProjects
// ====================================================

export interface GetAllProjects_getAllProjects {
  __typename: "Project";
  id: string;
  title: string;
  description: string;
}

export interface GetAllProjects {
  getAllProjects: GetAllProjects_getAllProjects[];
}
