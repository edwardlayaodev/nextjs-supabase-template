"use client";
import React from "react";

import { FormikProps, withFormik } from "formik";
import { Atom } from "../_components/atoms";
import { SignInValidationSchema } from "./validation/SignInValidation";

interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Sign-in</h1>
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
          inputType="email"
        ></Atom.Input>
        <Atom.Input
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.password}
          name="password"
          placeholder="Password"
          inputType="password"
        ></Atom.Input>
        <Atom.Button buttonType={"btn-primary"}>Submit</Atom.Button>
      </form>
    </section>
  );
};

const SignIn = withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
    };
  },

  // Validation using Yup
  validationSchema: SignInValidationSchema,

  handleSubmit: (values) => {
    // do submitting things
    console.log(values.email);
    console.log(values.password);
  },
})(InnerForm);

export default SignIn;
