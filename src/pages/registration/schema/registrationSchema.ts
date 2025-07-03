import * as yup from "yup";

export const registrationSchema = yup.object({
    login: yup.string().required('Login is required !'),
    password: yup
    .string()
    .required("The password field is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
      "The password must contain at least one capital letter, one lowercase letter and one special character",
    ),
})