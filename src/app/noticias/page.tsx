import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PlaceholderCard } from "@/components/ui/placeholder-card";
import { Newspaper } from "lucide-react";

export default function NoticiasPage() {
  return (
    <DashboardLayout
      title="Consolidador de Notícias"
      description="Agregue e gerencie notícias relevantes para criação de conteúdo"
    >
      <PlaceholderCard
        icon={Newspaper}
        title="Consolidador de Notícias"
        description="Agregue feeds RSS, newsletters e fontes de notícias para inspiração e criação de conteúdo relevante."
        className="h-full min-h-[400px]"
      />
    </DashboardLayout>
  );
}
