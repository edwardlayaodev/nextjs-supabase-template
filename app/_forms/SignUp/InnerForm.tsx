import { Atom } from "@/app/_components/atoms";
import { FormikProps } from "formik";
import SignUpFormValues from "@/app/types/SignUpFormValues";
/**
 * InnerForm component for rendering the sign-up form UI.
 * @param {FormikProps<FormValues>} props - The props from Formik for handling form state and actions.
 * @returns JSX.Element
 */
export const InnerForm = (props: FormikProps<SignUpFormValues>) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Sign-Up</h1>
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={props.handleSubmit}
      >
        <Atom.Input
          label="Email"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.email}
          name="email"
          type="email"
        />
        <Atom.Input
          label="Password"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.password}
          name="password"
          type="password"
        />
        <Atom.Input
          label="Confirm Password"
          onChangeHandler={props.handleChange}
          onBlurHandler={props.handleBlur}
          touched={props.touched}
          errors={props.errors}
          value={props.values.confirmPassword}
          name="confirmPassword"
          type="password"
        />
        <Atom.Button buttonType={"btn-primary"}>Submit</Atom.Button>
        <div>{props.status}</div>
      </form>
    </section>
  );
};
