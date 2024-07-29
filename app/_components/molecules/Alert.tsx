"use client";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Atom } from "../atoms";

/**
 * Interface for the Alert properties.
 * @param {"info" | "success" | "warning" | "error"} type - The type of alert, referring to the icon and color.
 * @param {message} string - The alert Message.
 * @param {isOpen} boolean - The state for showing the alert.
 */
interface Props {
  type: "info" | "success" | "warning" | "error";
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Interface for the Alert Element.
 * @param {class} string - The class of the Element.
 * @param {svg} React.ReactNode - The svg icon for the alert.
 */
interface AlertProps {
  class: string;
  svg: React.ReactNode;
}

/**
 * Alert component for displaying user alerts with a logo.
 * @param {Props} props - The props for the Alert component.
 * @returns The rendered Alert component.
 */
export default function Alert({ type, message, onClose, isOpen }: Props) {
  //Type definition for Alert Types and their properties.
  type alertTypeRecord = Record<string, AlertProps>;

  const alertTypeClass: alertTypeRecord = {
    info: { class: "alert-info", svg: <InformationCircleIcon width={24} /> },
    success: { class: "alert-success", svg: <CheckCircleIcon width={24} /> },
    warning: {
      class: "alert-warning",
      svg: <ExclamationTriangleIcon width={24} />,
    },
    error: { class: "alert-error", svg: <XCircleIcon width={24} /> },
  };

  return (
    <Atom.Animated extraClass="w-full absolute top-0" isVisible={isOpen}>
      <div
        role="alert"
        className={`relative w-full alert flex flex-col justify-start items-start ${alertTypeClass[type].class}`}
      >
        <div className="flex flex-row gap-4">
          {alertTypeClass[type].svg}
          <span>{message}</span>
          <XCircleIcon
            onClick={onClose}
            className="w-6 cursor-pointer absolute right-5"
          />
        </div>
      </div>
    </Atom.Animated>
  );
}