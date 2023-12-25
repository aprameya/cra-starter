/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResults = /* GraphQL */ `
  query GetResults($id: ID!) {
    getResults(id: $id) {
      id
      student
      grade
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listResults = /* GraphQL */ `
  query ListResults(
    $filter: ModelResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        student
        grade
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getExam = /* GraphQL */ `
  query GetExam($id: ID!) {
    getExam(id: $id) {
      id
      subject
      date
      teacher
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listExams = /* GraphQL */ `
  query ListExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject
        date
        teacher
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
