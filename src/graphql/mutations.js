/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResults = /* GraphQL */ `
  mutation CreateResults(
    $input: CreateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    createResults(input: $input, condition: $condition) {
      id
      student
      grade
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateResults = /* GraphQL */ `
  mutation UpdateResults(
    $input: UpdateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    updateResults(input: $input, condition: $condition) {
      id
      student
      grade
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteResults = /* GraphQL */ `
  mutation DeleteResults(
    $input: DeleteResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    deleteResults(input: $input, condition: $condition) {
      id
      student
      grade
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createExam = /* GraphQL */ `
  mutation CreateExam(
    $input: CreateExamInput!
    $condition: ModelExamConditionInput
  ) {
    createExam(input: $input, condition: $condition) {
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
export const updateExam = /* GraphQL */ `
  mutation UpdateExam(
    $input: UpdateExamInput!
    $condition: ModelExamConditionInput
  ) {
    updateExam(input: $input, condition: $condition) {
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
export const deleteExam = /* GraphQL */ `
  mutation DeleteExam(
    $input: DeleteExamInput!
    $condition: ModelExamConditionInput
  ) {
    deleteExam(input: $input, condition: $condition) {
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
