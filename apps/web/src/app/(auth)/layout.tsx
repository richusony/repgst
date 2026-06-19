import { Logo } from "@/src/components/ui/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="absolute left-5 top-5 z-10">
        <Logo />
      </div>
      {children}
    </main>
  );
}
