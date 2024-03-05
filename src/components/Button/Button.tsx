export function Button({
  children,
  ...rest
}: {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}) {
  return (
    <button
      className="rounded p-2 text-white bg-primary text-base font-extrabold"
      {...rest}
    >
      {children}
    </button>
  );
}
