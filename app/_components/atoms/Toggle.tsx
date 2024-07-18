import FormProps from "@/app/types/FormProps";

interface Props extends FormProps {
  type: "toggle" | "checkbox" | "radio";
  checked?: boolean;
}

interface ToggleElement {
  type: string;
  className: string;
}

type InputTypeRecord = Record<string, ToggleElement>;

const ToggleProps: InputTypeRecord = {
  checkbox: { type: "checkbox", className: "checkbox" },
  toggle: { type: "checkbox", className: "toggle" },
  radio: { type: "radio", className: "radio" },
};

export default function Toggle({
  checked = false,
  label,
  name,
  onChangeHandler,
  value,
  errors,
  touched,
  type,
}: Props) {
  return (
    <>
      <label className="label cursor-pointer gap-2" htmlFor={name}>
        <span className="label-text">{label}</span>
        <input
          onChange={onChangeHandler}
          value={value}
          name={name}
          type={`${ToggleProps[type].type}`}
          className={`${ToggleProps[type].className}`}
          defaultChecked={checked}
        />
      </label>
      {errors[name] && touched[name] && (
        <p className="text-error text-sm w-full ">{errors[name]}</p>
      )}
    </>
  );
}
