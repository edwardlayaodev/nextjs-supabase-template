interface Props {
  children: React.ReactNode;
  buttonType: "btn-primary" | "btn-secondary" | "btn-neutral" | "btn-ghost";
  onClick?: MouseEvent;
}

export default function Button({ children, buttonType }: Props) {
  return (
    <button type="submit" className={`btn ${buttonType}`}>
      {children}
    </button>
  );
}
