# Modular - Site de Fábrica de Móveis de Alto Padrão

Este projeto é uma plataforma web (institucional/vitrine) para uma fábrica de móveis planeados e design autoral, com foco em matérias-primas nobres (madeira maciça) e arquitetura de alto padrão. O site está preparado para escalar futuramente para um e-commerce.

## 🛠 Tecnologias Utilizadas

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Animações:** GSAP (Em breve)
- **CMS:** Sanity.io / Payload CMS (Em breve)
- **Hospedagem:** Vercel

---

## 🚀 Próximos Passos (Onde recomeçar)

Para dar continuidade ao projeto, escolha uma das seguintes frentes de desenvolvimento:

### 1. Vida e Movimento (Integração GSAP)

O design de alto padrão exige fluidez.

- [x] Instalar o GSAP (`npm install gsap @gsap/react`).
- [] Criar animação de _reveal_ (fade-up) nos textos e elementos das sections ao carregar a página.
- [ ] Animar o "desenho" da linha central na `HistorySection`.

### 2. Criação das Rotas Internas (App Router)

Expandir o site para além da página inicial.

- [ ] Criar `src/app/produtos/page.tsx` (Catálogo expandido de móveis soltos).
- [ ] Criar `src/app/projetos/page.tsx` (Galeria completa dos planeados, com filtros).
- [ ] Criar `src/app/nossa-historia/page.tsx` (Detalhes institucionais e sustentabilidade).
- [ ] Criar `src/app/contato/page.tsx` (Formulário e mapa do showroom).

### 3. Dinamismo de Conteúdo (Headless CMS)

Tirar os dados estáticos (arrays) do código para permitir a gestão autónoma pelo cliente.

- [ ] Configurar um projeto no **Sanity.io**.
- [ ] Criar os esquemas (Schemas) para `Produtos`, `Projetos` e `Marcos Históricos`.
- [ ] Utilizar o GROQ/Next.js fetch para alimentar os componentes React criados.

### 4. Preparação para Vendas (Futuro)

- [ ] Estruturar os botões "Show more" para encaminhar para fluxos de orçamentação no WhatsApp.
- [ ] Projetar a integração com APIs de E-commerce (ex: Medusa.js, Shopify) quando a fábrica decidir escalar.
