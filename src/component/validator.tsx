import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required!")
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username must not exceed 20 characters."),
  email: Yup.string()
    .email("Email is invalid.")
    .required("Email is required!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password must be at least 6 characters.")
    .max(40, "Password must not exceed 40 characters."),
})