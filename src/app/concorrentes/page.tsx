import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PlaceholderCard } from "@/components/ui/placeholder-card";
import { Users } from "lucide-react";

export default function ConcorrentesPage() {
  return (
    <DashboardLayout
      title="Rastreador de Concorrentes"
      description="Monitore e analise a performance dos seus concorrentes"
    >
      <PlaceholderCard
        icon={Users}
        title="Rastreador de Concorrentes"
        description="Acompanhe o crescimento, frequência de postagem e engajamento dos concorrentes para benchmarking estratégico."
        className="h-full min-h-[400px]"
      />
    </DashboardLayout>
  );
}
