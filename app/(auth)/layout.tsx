export const dynamic = "force-dynamic";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-soft-white">
      <div className="mx-auto max-w-md px-6 py-12">{children}</div>
    </div>
  );
}
