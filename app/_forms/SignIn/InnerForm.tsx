import { Atom } from "@/app/_components/atoms";
import SignInFormValues from "@/app/types/SignInFormValues";
import { FormikProps } from "formik";

/**
 * InnerForm component for rendering the form UI.
 * @param {FormikProps<FormValues>} props - The props from Formik for handling form state and actions.
 * @returns JSX.Element
 */
export const InnerForm = (props: FormikProps<SignInFormValues>) => {
  const inputFields = [
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" },
  ];

  const renderInputFields = inputFields.map((item, index) => {
    return (
      <Atom.Input
        key={item.name + index}
        label={item.label}
        onChangeHandler={props.handleChange}
        onBlurHandler={props.handleBlur}
        touched={props.touched}
        errors={props.errors}
        value={props.values.email}
        name={item.name}
        type={item.type as "email" | "password"}
      />
    );
  });

  return (
    <section className="flex flex-col gap-4">
      <h1 className="mx-auto text-2xl font-bold">Sign-in</h1>
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={props.handleSubmit}
      >
        {renderInputFields}

        <Atom.Button buttonType={"btn-primary"}>Submit</Atom.Button>
        <div>{props.status}</div>
      </form>
    </section>
  );
};
