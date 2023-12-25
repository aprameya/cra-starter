/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResults = /* GraphQL */ `
  subscription OnCreateResults($owner: String) {
    onCreateResults(owner: $owner) {
      id
      student
      grade
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateResults = /* GraphQL */ `
  subscription OnUpdateResults($owner: String) {
    onUpdateResults(owner: $owner) {
      id
      student
      grade
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteResults = /* GraphQL */ `
  subscription OnDeleteResults($owner: String) {
    onDeleteResults(owner: $owner) {
      id
      student
      grade
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateExam = /* GraphQL */ `
  subscription OnCreateExam($owner: String) {
    onCreateExam(owner: $owner) {
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
export const onUpdateExam = /* GraphQL */ `
  subscription OnUpdateExam($owner: String) {
    onUpdateExam(owner: $owner) {
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
export const onDeleteExam = /* GraphQL */ `
  subscription OnDeleteExam($owner: String) {
    onDeleteExam(owner: $owner) {
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
