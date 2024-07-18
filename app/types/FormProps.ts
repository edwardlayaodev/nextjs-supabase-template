import { ChangeEvent, FocusEvent } from "react";

/**
 * FormProps interface used for Forms using FormikBag.
 * @param {string} label - Label for the field, required for accesibility reasons.
 * @param {string} placeholder - Optional, placeholder for the field.
 * @param {any} touched - State for the field if it is touched
 * @param {any} value - Value of the field
 * @param {any} errors - Validation errors of the field
 * @param {string} name - Name of the field, used in formik
 * @param {event: ChangeEvent<any>} onChangeHandler - handler for onChange, used by formik.
 * @param {event: onBlurHandler<any>} onBlurHandler - handler for onBlur, used by formik.
 * @param {string} extraClass - Optional, extra class for further styling

 */

export default interface FormProps {
  label: string;
  placeholder?: string;
  touched: any;
  value: any;
  errors: any;
  name: string;
  onChangeHandler: (event: ChangeEvent<any>) => void;
  onBlurHandler: (event: FocusEvent<any>) => void;
  extraClass?: string;
}
