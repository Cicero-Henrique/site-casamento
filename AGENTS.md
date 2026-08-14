# AGENTS.md — Site do Casamento

Regras que qualquer agente de IA deve seguir ao trabalhar neste projeto: site estático (HTML/CSS/JS nativos) do casamento de **Cícero & Júlia**, com uma home (apresentação, fotos, cerimônia, mapa) e uma página de presentes.

Antes de qualquer mudança: ler este arquivo, ler `PLANNING.md` (escopo, dados oficiais, paleta em tabela, critérios de aceite), inspecionar a estrutura atual e entender o que já existe. Em caso de conflito: instrução explícita mais recente do responsável > `PLANNING.md` (requisitos funcionais) > este arquivo (regras de implementação).

Objetivo: manter o projeto simples por dentro e sofisticado por fora.

---

## 1. Stack

Apenas HTML5, CSS3 e JavaScript nativo, sem build/transpiler.

**Não usar:** frameworks (React, Next.js, Vue, Angular, Svelte, Astro), Tailwind/Bootstrap, jQuery, Node.js como requisito de execução, bundlers, banco de dados, backend, CMS, autenticação, API própria, servidor de aplicação.

Se alguma dessas tecnologias parecer necessária, explicar antes por que HTML/CSS/JS nativos deixaram de ser suficientes. Não instalar nada por conveniência.

**Sem banco de dados, sob nenhuma hipótese.** A lista de presentes é estática, em `assets/js/gifts.js` (ver modelo em `PLANNING.md`). Nunca usar `localStorage` para simular estado global (ex.: presente "reservado") entre convidados — se isso for pedido no futuro, é mudança de escopo e requer discussão antes de implementar.

## 2. Estrutura de arquivos

```text
/
├── index.html
├── presentes.html
├── AGENTS.md
├── PLANNING.md
├── assets/
│   ├── css/styles.css
│   ├── js/ (main.js, gifts.js)
│   ├── images/ (couple/, gifts/, decorative/, textures/)
│   └── icons/
├── favicon.ico
└── robots.txt
```

Simplificar quando um diretório não for necessário. Não criar pastas vazias ou abstrações prematuras.

## 3. Identidade visual

Direção: **elegante + rústica + medieval sutil + romântica + leve** — como um convite de casamento clássico em papel artesanal, com tipografia serifada e ornamentos botânicos discretos. Referência visual: `paleta.jpeg`. A paleta oficial (hex + uso recomendado) está em `PLANNING.md`; centralizar sempre em variáveis CSS no `:root`, nunca hex soltos pelo código. Utilizar arabescos dourados suaves verticais nas duas laterais da página.

Evitar: RPG/fantasia medieval exagerada, pergaminho amarelado artificial, dourado brilhante, neon, glassmorphism, sombras fortes tipo dashboard, cards flutuantes em excesso, border-radius grande, estética de e-commerce/loja.

Tipografia: no máximo duas famílias (ex.: Cinzel/Cormorant Garamond para títulos, Cormorant Garamond/Libre Baskerville para corpo). Google Fonts é aceitável, mas com poucas famílias/pesos e `font-display: swap`.

Princípio para qualquer dúvida visual: elegância > efeitos, legibilidade > decoração, fotografia > gráficos, simplicidade > abstração, espaço > densidade.

## 4. Fotos, galeria e Hero

Fotos são protagonistas: nunca deformar, preservar proporção, `loading="lazy"` abaixo da dobra, `width`/`height` quando possível, WebP/AVIF, otimizar antes de adicionar (nunca servir uma imagem de vários MB para uma miniatura). Filtros apenas muito sutis, se necessário para consistência.

Hero ocupa ~80–100vh, prioriza nomes + data + foto; elementos gráficos não competem com a foto. Galeria simples (grid/mosaico/sequência); não instalar biblioteca de carrossel — se precisar de um, implementar pequeno em JS nativo.

## 5. Google Maps

Preferir Google Maps Embed (iframe) a Maps JavaScript API. Não usar API key sem necessidade. Sempre oferecer também um link "Abrir no Google Maps".

## 6. Código CSS

Ordem sugerida no arquivo: reset → variáveis → base → tipografia → layout → header → hero → seções → galeria → cerimônia → mapa → presentes → footer → utilitários → media queries.

Nomenclatura próxima de BEM sem rigidez (`.hero__title`, `.gift-card__image`); evitar nomes genéricos (`.box1`, `.div3`). Centralizar espaçamento e medidas em variáveis (`--space-*`, `--content-width`, etc.), evitando valores arbitrários repetidos.

## 7. Código JavaScript

Usar apenas quando necessário (menu mobile, animações leves, renderização de presentes, galeria/carrossel simples). Funções pequenas e nomeadas por responsabilidade (`setupMobileMenu`, `renderGifts`). Sem estado global, sem classes/abstrações desnecessárias, sem SPA/roteamento client-side.

Validar se um elemento existe antes de manipulá-lo; progressive enhancement — o conteúdo principal deve funcionar mesmo se o JS falhar.

## 8. HTML, acessibilidade e SEO

HTML semântico (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`), um único `<h1>` por página, hierarquia correta de headings. `alt` significativo em fotos importantes, foco visível, contraste adequado, `aria-hidden="true"` em elementos puramente decorativos.

Cada página com `<title>`, `meta description`, `meta viewport` e Open Graph completo (`og:title`, `og:description`, `og:image`, `og:type`) — importante para compartilhamento no WhatsApp. Favicon simples (iniciais/monograma/ramo), legível em tamanho pequeno.

## 9. Animações e responsividade

Animações discretas (fade-in, reveal, hover sutil), 150–600ms; respeitar `prefers-reduced-motion: reduce`. Sem parallax pesado, partículas ou efeitos 3D.

Mobile-first; testar em ~360/390/768/1024/1440px. Em telas pequenas: reduzir ornamentação, garantir botões clicáveis e mapa dentro da viewport, empilhar cards.

## 10. Segurança e privacidade

Nada de credenciais, tokens ou API keys no código. `rel="noopener noreferrer"` em links externos com `target="_blank"`. Não inserir HTML externo sem sanitização.

Nunca inventar dados pessoais (endereço completo, telefones, e-mails, nomes de familiares, história do casal) — usar placeholders explícitos (`[Texto a definir]`) até que sejam fornecidos. Os dados já oficiais (nomes, data, horário, igreja — ver `PLANNING.md`) não são placeholders e devem ser usados tal como são, em qualquer seção que os exiba.

## 11. Fluxo de trabalho

Para cada tarefa: ler a solicitação → consultar `PLANNING.md` e este arquivo → inspecionar arquivos relevantes → implementar a solução mais simples que resolve o pedido → validar visual e funcionalmente → reportar objetivamente o que mudou.

Antes de adicionar algo, perguntar:

- **Funcionalidade nova:** é necessária para um convidado usar o site? Se não, provavelmente fica fora do MVP.
- **Tecnologia nova:** HTML/CSS/JS nativos realmente não resolvem de forma simples?
- **Abstração nova (helper/classe/componente):** existe repetição real suficiente para justificar?

Mudanças arquiteturais grandes exigem explicar antes: problema atual, por que a estrutura atual não resolve, o que está sendo proposto, arquivos afetados, por que vale a complexidade.

## 12. Git e conteúdo existente

Commits pequenos e coesos (não misturar visual + refactor + feature + fix não relacionado no mesmo commit). Nunca usar comandos destrutivos de Git sem pedido explícito. Nunca apagar fotos, textos, dados ou arquivos de planejamento sem entender por que existem — se algo parecer obsoleto, avisar antes de remover.
