export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid h-full container px-0 pb-2">
      <div>{children}</div>
    </main>
  );
};
