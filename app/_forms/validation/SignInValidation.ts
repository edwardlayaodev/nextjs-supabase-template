import * as yup from "yup";

export const SignInValidationSchema = yup.object().shape({
  email: yup.string().email("Email must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 characters or higher")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
});
