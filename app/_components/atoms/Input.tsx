import FormProps from "@/app/types/FormProps";
import {
  EnvelopeIcon,
  KeyIcon,
  DocumentTextIcon,
  DocumentIcon,
} from "@heroicons/react/16/solid";

interface Props extends FormProps {
  iconPosition?: "start" | "end";
  type: "input" | "file" | "password" | "email";
}

const iconWidth = 18;

interface InputElement {
  type: string;
  className: string;
  svg?: React.ReactNode;
}

type InputTypeRecord = Record<string, InputElement>;

const textInputClass = "input input-bordered flex items-center gap-2 w-full";
const InputProps: InputTypeRecord = {
  input: {
    type: "input",
    className: textInputClass,
    svg: <DocumentTextIcon width={iconWidth} />,
  },
  password: {
    type: "password",
    className: textInputClass,
    svg: <KeyIcon width={iconWidth} />,
  },
  email: {
    type: "email",
    className: textInputClass,
    svg: <EnvelopeIcon width={iconWidth} />,
  },
  file: {
    type: "file",
    className: "file-input input-bordered flex p-2 items-center gap-4",
    svg: <DocumentIcon width={iconWidth} />,
  },
};

export default function Input({
  iconPosition = "start",
  label,
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
      <label
        className={`${InputProps[type].className} ${extraClass}`}
        htmlFor={name}
      >
        {iconPosition == "start" && InputProps[type].svg}
        {label}

        <input
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          name={name}
          value={value}
          type={InputProps[type].type}
          placeholder={placeholder}
          className="grow"
        />
        {iconPosition == "end" && InputProps[type].svg}
      </label>
      <i className="bi bi-envelope-fill bg-red-500"></i>
      {errors[name] && touched[name] && (
        <p className="text-error text-sm w-full ">{errors[name]}</p>
      )}
    </>
  );
}
