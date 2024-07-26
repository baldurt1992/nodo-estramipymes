export interface FormResponse {
  question: string;
  answer: string;
}

export interface UserFormResponses {
  email: string;
  name: string;
  formCompleted: boolean;
  responses: { question: string; answer: string }[];
}
