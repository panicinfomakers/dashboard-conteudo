import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PlaceholderCard } from "@/components/ui/placeholder-card";
import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <DashboardLayout
      title="Analytics"
      description="Acompanhe métricas e desempenho do conteúdo"
    >
      <PlaceholderCard
        icon={BarChart3}
        title="Analytics"
        description="Visualize métricas de engajamento, alcance, impressões e crescimento de seguidores ao longo do tempo."
        className="h-full min-h-[400px]"
      />
    </DashboardLayout>
  );
}
