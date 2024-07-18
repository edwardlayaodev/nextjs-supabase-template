import FormProps from "@/app/types/FormProps";

/**
 * Props interface extending FormProps.
 * @param {string[]} optionList - The list of options to be rendered in the select dropdown.
 */
interface Props extends FormProps {
  optionList: string[];
  altLabel?: string;
}

/**
 * Select component for rendering a dropdown list with options and error handling.
 * @param {Props} props - The props for the Select component.
 * @returns JSX.Element
 */
export default function Select({
  name,
  label,
  altLabel,
  onChangeHandler,
  onBlurHandler,
  extraClass,
  optionList,
  errors,
  touched,
}: Props) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{label}</span>
        {altLabel && <span className="label-text-alt">{altLabel}</span>}
      </div>
      <select
        name={name}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={`select select-bordered ${extraClass}`}
      >
        {optionList?.map((item, index) => (
          <option key={item + index}>{item}</option>
        ))}
      </select>
      {errors[name] && touched[name] && (
        <p className="text-error text-sm">{errors[name]}</p>
      )}
    </label>
  );
}