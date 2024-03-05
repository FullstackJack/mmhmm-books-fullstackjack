import { MouseEventHandler } from "react";

export function IconButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} className="rounded p-2">
      {children}
    </button>
  );
}
