import * as yup from "yup";

export const loginSchema = yup
  .object({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email is required"),
  })
  .required();

export type LoginFormData = yup.InferType<typeof loginSchema>;
