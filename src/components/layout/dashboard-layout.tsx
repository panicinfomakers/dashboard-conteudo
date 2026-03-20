import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function DashboardLayout({ children, title, description }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[hsl(var(--background))]">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {/* Page Header */}
        <header className="border-b border-[hsl(var(--border))] px-8 py-5">
          <h1 className="text-xl font-semibold text-[hsl(var(--foreground))]">{title}</h1>
          {description && (
            <p className="text-sm text-[hsl(var(--muted-foreground))] mt-0.5">{description}</p>
          )}
        </header>
        {/* Page Content */}
        <div className="flex-1 px-8 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
