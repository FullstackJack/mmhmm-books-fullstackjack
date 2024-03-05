export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full pb-12 flex flex-row justify-between">{children}</div>
  );
}
