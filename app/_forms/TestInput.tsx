"use client";
import React from "react";
import { FormikProps, withFormik } from "formik";
import { Atom } from "../_components/atoms";

interface FormValues {
  checkbox: string;
  password: string;
  email: string;
  file: string;
  radio: string;
  range: number;
  rating: string;
  select: string;
  input: string;
  textarea: string;
  toggle: boolean;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Sign-in</h1>
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={props.handleSubmit}
      >
        <Atom.Toggle
          label="Checkbox"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.checkbox}
          name="checkbox"
          type="checkbox"
        ></Atom.Toggle>
        <Atom.Input
          label="Password"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.password}
          name="password"
          type="password"
        ></Atom.Input>
        <Atom.Input
          label="Email"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.email}
          name="email"
          type="email"
        ></Atom.Input>
        <Atom.Input
          label="Text"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.input}
          name="input"
          type="input"
        ></Atom.Input>
        <Atom.Input
          label="File Upload"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.file}
          name="file"
          placeholder="file"
          type="file"
          iconPosition="end"
        ></Atom.Input>
        <div className="flex flex-row gap-4">
          <Atom.Toggle
            label="Chamyto"
            onChangeHandler={props.handleChange}
            onBlurHandler={props.handleBlur}
            touched={props.touched}
            errors={props.errors}
            value={"chamyto"}
            name="radio"
            type="radio"
          ></Atom.Toggle>
          <Atom.Toggle
            label="Patakichi"
            onChangeHandler={props.handleChange}
            onBlurHandler={props.handleBlur}
            touched={props.touched}
            errors={props.errors}
            value={"patakichi"}
            name="radio"
            type="radio"
          ></Atom.Toggle>
        </div>

        <Atom.Range
          label="Range"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.range}
          name="range"
        ></Atom.Range>
        <Atom.Rating
          label="Rating"
          maxRating={5}
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.rating}
          name="rating"
        ></Atom.Rating>
        <Atom.Select
          label="Select"
          altLabel="a selection"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.select}
          name="select"
          optionList={["Chamyto", "Patakichi"]}
        ></Atom.Select>
        <Atom.Toggle
          label="Toggle"
          type="toggle"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.toggle}
          name="toggle"
        ></Atom.Toggle>
        <Atom.TextArea
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.textarea}
          name="textarea"
          label="Text Area"
        ></Atom.TextArea>

        <Atom.Button buttonType={"btn-primary"}>Submit</Atom.Button>
        <div>{props.status}</div>
      </form>
    </section>
  );
};

const TestInput = withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
      input: "",
      checkbox: "",
      file: "",
      radio: "",
      range: 0,
      rating: "5",
      select: "",
      toggle: false,
      textarea: "",
    };
  },

  handleSubmit: async (values, errors) => {
    // do submitting things
    console.log(values);
  },
})(InnerForm);

export default TestInput;
