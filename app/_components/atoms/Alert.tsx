import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

interface Props {
  type: "info" | "success" | "warning" | "error";
  message: string;
}

interface AlertProps {
  class: string;
  svg: React.ReactNode;
}

export default function Alert({ type, message }: Props) {
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
    <div role="alert" className={`alert ${alertTypeClass[type].class}`}>
      {alertTypeClass[type].svg}
      <span>{message}</span>
    </div>
  );
}
