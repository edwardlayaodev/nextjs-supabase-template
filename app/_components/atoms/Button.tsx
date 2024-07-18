import React, { MouseEventHandler } from "react";

/**
 * Props interface for the Button component.
 * @param {React.ReactNode} children - The child elements to be rendered inside the button.
 * @param {"btn-primary" | "btn-secondary" | "btn-neutral" | "btn-ghost"} buttonType - The type of the button for styling purposes.
 * @param {Function} [onClick] - The optional click handler function.
 */
interface Props {
  children: React.ReactNode;
  buttonType: "btn-primary" | "btn-secondary" | "btn-neutral" | "btn-ghost";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Button component for rendering a styled button with optional click handling.
 * @param {Props} props - The props for the Button component.
 * @returns JSX.Element
 */
export default function Button({ children, buttonType, onClick }: Props) {
  return (
    <button type="submit" className={`btn ${buttonType}`} onClick={onClick}>
      {children}
    </button>
  );
}
