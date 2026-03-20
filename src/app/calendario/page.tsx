import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PlaceholderCard } from "@/components/ui/placeholder-card";
import { CalendarDays } from "lucide-react";

export default function CalendarioPage() {
  return (
    <DashboardLayout
      title="Calendário de Conteúdo"
      description="Planeje e visualize seu calendário editorial"
    >
      <PlaceholderCard
        icon={CalendarDays}
        title="Calendário de Conteúdo"
        description="Organize e visualize suas publicações em um calendário editorial interativo, com visão mensal e semanal."
        className="h-full min-h-[400px]"
      />
    </DashboardLayout>
  );
}
