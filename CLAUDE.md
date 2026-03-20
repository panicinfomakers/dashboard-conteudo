# Dashboard de Conteúdo Instagram

Plataforma de gestão de conteúdo para Instagram com tema escuro global.

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS v4 |
| Componentes | shadcn/ui (estilo Radix) |
| Ícones | Lucide React |
| Fontes | Geist Sans / Geist Mono (Google Fonts) |

## Estrutura de Pastas

```
src/
├── app/                        # App Router do Next.js
│   ├── layout.tsx              # Layout raiz com metadados e fontes
│   ├── page.tsx                # Redirect para /instagram
│   ├── globals.css             # Variáveis CSS do tema escuro + Tailwind
│   ├── instagram/
│   │   └── page.tsx            # Gestor de Instagram
│   ├── analytics/
│   │   └── page.tsx            # Analytics
│   ├── calendario/
│   │   └── page.tsx            # Calendário de Conteúdo
│   ├── concorrentes/
│   │   └── page.tsx            # Rastreador de Concorrentes
│   └── noticias/
│       └── page.tsx            # Consolidador de Notícias
│
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx         # Navegação lateral compartilhada
│   │   └── dashboard-layout.tsx # Wrapper de layout com sidebar + header
│   └── ui/
│       └── placeholder-card.tsx # Card placeholder para seções em desenvolvimento
│
└── lib/
    └── utils.ts                # Utilitário cn() para merge de classes Tailwind
```

## Padrões de Componentes

### DashboardLayout

Wrapper de layout usado em todas as páginas de seção. Renderiza a sidebar e um header com título e descrição da página.

```tsx
import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function MinhaPagina() {
  return (
    <DashboardLayout
      title="Título da Seção"
      description="Descrição opcional"
    >
      {/* conteúdo da página */}
    </DashboardLayout>
  );
}
```

### Sidebar

Componente cliente (`"use client"`) que usa `usePathname()` para destacar o item de navegação ativo. Não deve ser instanciado diretamente nas páginas — use `DashboardLayout`.

Itens de navegação são definidos no array `navItems` em `sidebar.tsx`. Para adicionar uma nova seção:
1. Adicione a rota em `navItems`
2. Crie a pasta `src/app/<rota>/page.tsx`

### PlaceholderCard

Card visual para seções ainda não implementadas. Recebe `icon`, `title` e `description`.

```tsx
import { PlaceholderCard } from "@/components/ui/placeholder-card";
import { SomeIcon } from "lucide-react";

<PlaceholderCard
  icon={SomeIcon}
  title="Nome da Feature"
  description="Descrição do que será implementado."
/>
```

### Tema Escuro

O tema escuro é aplicado globalmente via:
- Variáveis CSS em `globals.css` (HSL sem `hsl()` wrapper, para compatibilidade com Tailwind v4)
- Classe `dark` na tag `<html>` em `layout.tsx`
- Paleta baseada em tons de azul-escuro (slate 900 / blue 600)

Variáveis de sidebar disponíveis:
- `--sidebar-background`, `--sidebar-foreground`, `--sidebar-border`
- `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-primary`

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run lint     # Linting ESLint
```
