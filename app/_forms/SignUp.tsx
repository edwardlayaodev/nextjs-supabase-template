"use client";

import React from "react";
import { FormikProps, withFormik } from "formik";
import { Atom } from "../_components/atoms";
import { SignUpValidationSchema } from "./SignUp/validation";
import axios from "axios";

/**
 * Interface for the form values.
 * @param {string} email - The email value.
 * @param {string} password - The password value.
 * @param {string} confirmPassword - The confirm password value.
 */
interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * InnerForm component for rendering the sign-up form UI.
 * @param {FormikProps<FormValues>} props - The props from Formik for handling form state and actions.
 * @returns JSX.Element
 */
const InnerForm = (props: FormikProps<FormValues>) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Sign-Up</h1>
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={props.handleSubmit}
      >
        <Atom.Input
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.email}
          name="email"
          placeholder="Email"
          type="email"
        />
        <Atom.Input
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.password}
          name="password"
          placeholder="Password"
          type="password"
        />
        <Atom.Input
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />
        <Atom.Button buttonType={"btn-primary"}>Submit</Atom.Button>
        <div>{props.status}</div>
      </form>
    </section>
  );
};

/**
 * SignUp component enhanced with Formik for form handling.
 */
const SignUp = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    confirmPassword: "",
  }),

  // Validation schema using Yup
  validationSchema: SignUpValidationSchema,

  /**
   * Handle form submission.
   * @param {FormValues} values - The form values.
   * @param {FormikHelpers<FormValues>} helpers - Formik helpers for managing form state.
   */
  handleSubmit: async (values, helpers) => {
    // Form submission logic
    const data: FormValues = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    try {
      const res = await axios.post("/auth/register", { data });

      if (res.status === 200) {
        window.location.href = "/";
      }
    } catch (error: any) {
      helpers.setStatus(error.response.data.error);
    }
  },
})(InnerForm);

export default SignUp;
