import { ChangeEvent, FocusEvent } from "react";

interface Props {
  placeholder: string;
  touched: any;
  value: any;
  errors: any;
  name: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlurHandler: (event: FocusEvent<HTMLInputElement>) => void;
  type: InputType;
  extraClass?: string;
}

type InputType =
  | "input"
  | "checkbox"
  | "file"
  | "radio"
  | "range"
  | "rating"
  | "select"
  | "toggle"
  | "password"
  | "email";

type InputElement = {
  type: string;
  className: string;
};

type InputTypeRecord = Record<InputType, InputElement>;

const InputProps: InputTypeRecord = {
  input: { type: "input", className: "input input-bordered" },
  password: { type: "password", className: "input input-bordered" },
  email: { type: "email", className: "input input-bordered" },
  checkbox: { type: "checkbox", className: "checkbox" },
  file: { type: "file", className: "file-input" },
  radio: { type: "radio", className: "radio" },
  range: { type: "range", className: "range" },
  rating: { type: "radio", className: "mask mask-star" },
  select: { type: "select", className: "select" },
  toggle: { type: "checkbox", className: "toggle" },
};

export default function Input({
  placeholder,
  onChangeHandler,
  onBlurHandler,
  value,
  errors,
  touched,
  name,
  type,
  extraClass,
}: Props) {
  return (
    <>
      <input
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        name={name}
        value={value}
        type={InputProps[type].type}
        placeholder={placeholder}
        className={`${InputProps[type].className} ${extraClass}`}
      />
      {errors[name] && touched[name] && (
        <p className="text-error text-sm">{errors[name]}</p>
      )}
    </>
  );
}
