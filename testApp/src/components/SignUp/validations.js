import * as yup from 'yup'

const validations = yup
    .object()
    .shape({
        id: yup
            .string()
            .required('This area is required'),
        password: yup
            .string('At least 4 characters')
            .min(4)
            .required('This area is required')
    })

export default validations;