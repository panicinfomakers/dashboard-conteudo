"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  BarChart3,
  CalendarDays,
  Users,
  Newspaper,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Gestor de Instagram",
    href: "/instagram",
    icon: Instagram,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Calendário de Conteúdo",
    href: "/calendario",
    icon: CalendarDays,
  },
  {
    label: "Rastreador de Concorrentes",
    href: "/concorrentes",
    icon: Users,
  },
  {
    label: "Consolidador de Notícias",
    href: "/noticias",
    icon: Newspaper,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-64 min-h-screen bg-[hsl(var(--sidebar-background))] border-r border-[hsl(var(--sidebar-border))]">
      {/* Logo / Header */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-[hsl(var(--sidebar-border))]">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[hsl(var(--sidebar-primary))]">
          <LayoutDashboard className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[hsl(var(--sidebar-foreground))] leading-tight">
            Dashboard
          </p>
          <p className="text-xs text-[hsl(var(--muted-foreground))] leading-tight">
            Conteúdo Instagram
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
        <p className="px-3 py-1 text-xs font-medium text-[hsl(var(--muted-foreground))] uppercase tracking-wider mb-2">
          Menu
        </p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-[hsl(var(--sidebar-primary))] text-white"
                  : "text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-accent-foreground))]"
              )}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-[hsl(var(--sidebar-border))]">
        <p className="text-xs text-[hsl(var(--muted-foreground))]">
          v0.1.0 &middot; Tema Escuro
        </p>
      </div>
    </aside>
  );
}
