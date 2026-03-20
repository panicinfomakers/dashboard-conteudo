import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { PlaceholderCard } from "@/components/ui/placeholder-card";
import { Instagram } from "lucide-react";

export default function InstagramPage() {
  return (
    <DashboardLayout
      title="Gestor de Instagram"
      description="Gerencie publicações, stories e conteúdo do Instagram"
    >
      <PlaceholderCard
        icon={Instagram}
        title="Gestor de Instagram"
        description="Aqui você poderá criar, agendar e gerenciar publicações, stories, reels e outras mídias do Instagram."
        className="h-full min-h-[400px]"
      />
    </DashboardLayout>
  );
}
