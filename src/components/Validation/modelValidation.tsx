import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    columns: yup.array().of(yup.string().required('Column is required')),
  })