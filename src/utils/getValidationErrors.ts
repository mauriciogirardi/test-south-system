import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};
  err.inner.forEach(error => {
    validationErrors[err.path === undefined ? 0 : err.path] = error.message;
  });

  return validationErrors;
}
