# AGENTS.md - Site do Casamento

Regras para qualquer agente de IA que trabalhar neste projeto. Este é um site estático do casamento de **Júlia & Cícero**, feito com HTML, CSS e JavaScript nativos, com uma página inicial e uma página de presentes.

Antes de qualquer mudança: leia este arquivo, leia `PLANNING.md`, inspecione a estrutura atual e entenda o que já existe. Em caso de conflito, siga esta ordem: instrução explícita mais recente do responsável > `PLANNING.md` > este arquivo.

Objetivo: manter o projeto simples por dentro e sofisticado por fora.

---

## 1. Stack

Use apenas:

- HTML5;
- CSS3;
- JavaScript nativo;
- arquivos estáticos em `assets/`.

Não usar: frameworks, Tailwind, Bootstrap, jQuery, Node.js como requisito de execução, bundlers, banco de dados, backend, CMS, autenticação, API própria ou servidor de aplicação.

Se alguma tecnologia nova parecer necessária, explique antes por que HTML/CSS/JS nativos deixaram de ser suficientes. Não instalar nada por conveniência.

**Sem banco de dados, sob nenhuma hipótese.** A lista de presentes é estática em `assets/js/gifts.js`. Nunca usar `localStorage` para simular estado global entre convidados, como presente reservado, comprado ou indisponível. Se isso for pedido, é mudança de escopo e precisa ser discutida antes.

## 2. Estado Atual do Projeto

Arquivos principais atuais:

```text
/
|-- index.html
|-- presentes.html
|-- AGENTS.md
|-- PLANNING.md
|-- README.md
|-- LICENSE
|-- robots.txt
|-- paleta.jpeg
`-- assets/
    |-- css/styles.css
    |-- icons/favicon.svg
    |-- images/
    |   |-- couple/
    |   |-- decor/
    |   |-- decorative/
    |   |-- gifts/
    |   `-- textures/
    `-- js/
        |-- gifts.js
        `-- main.js
```

Observações importantes:

- `assets/images/decor/arabesco.png` é o ornamento usado no fundo atual.
- `assets/images/decorative/` e `assets/images/textures/` existem, mas estão vazios no momento desta atualização.
- `assets/images/couple/og-cover.jpg` é referenciado nos metadados Open Graph, mas o arquivo ainda não existe.
- Algumas imagens em `assets/images/couple/` e `assets/images/gifts/` ainda são grandes demais para uso final sem otimização.
- Na análise feita para esta atualização, havia alterações locais não comitadas em `assets/css/styles.css` e `assets/images/decor/arabesco.png`; não reverta nada sem pedido explícito.

## 3. Dados Oficiais

Use estes dados exatamente quando forem exibidos:

- **Noivos:** Júlia e Cícero
- **Data:** 28 de novembro de 2026
- **Horário:** 11h
- **Local:** Igreja Matriz de Baependi
- **Cidade:** Baependi, MG

Não inventar endereço completo, telefones, e-mails, nomes de familiares, história do casal ou textos pessoais finais. Use placeholders explícitos, como `[Texto a definir]`, até que o conteúdo seja fornecido.

## 4. Identidade Visual

Direção: **elegante + rústica + medieval sutil + romântica + leve**.

A referência visual é `paleta.jpeg`: convite claro, papel texturizado, serifas, ornamentos botânicos finos, molduras delicadas e contraste entre azul profundo e tons claros.

O visual implementado atualmente usa:

- fundo principal azul marinho profundo;
- texto claro em marfim/champagne;
- seções alternadas em azul índigo translúcido;
- arabesco decorativo aplicado ao `body`;
- tipografia Cormorant Garamond para títulos e corpo;
- monograma `J & C`.

Evitar:

- fantasia medieval pesada;
- estética de RPG, castelo, armadura ou pergaminho artificial;
- dourado brilhante;
- neon;
- glassmorphism;
- sombras fortes de dashboard;
- excesso de cards flutuantes;
- estética de marketplace ou e-commerce.

Princípio visual: elegância > efeitos, legibilidade > decoração, fotografia > gráficos, simplicidade > abstração, espaço > densidade.

## 5. Paleta e CSS

Centralize cores em variáveis CSS no `:root`. Não espalhar hex soltos pelo código, exceto em ativos isolados como SVG de favicon.

Variáveis atuais em `assets/css/styles.css`:

```css
:root {
  --color-navy: #1a1f2b;
  --color-indigo: #3a4a68;
  --color-soft-blue: #5b6c8f;
  --color-beige: #e5ddcf;
  --color-champagne: #dbc3a5;
  --color-neutral: #e8ddcb;
  --color-ivory: #f4f2ee;
}
```

Ordem sugerida do CSS:

```text
reset > variáveis > base > tipografia > layout > header > hero > seções > galeria > cerimônia > mapa > presentes > footer > utilitários > media queries
```

Use nomenclatura próxima de BEM sem rigidez, como `.hero__title` e `.gift-card__image`. Evite nomes genéricos. Centralize espaçamentos e medidas em variáveis quando houver repetição real.

Evite adicionar novos estilos inline. Se mexer em trechos que já têm `style=""`, prefira mover para classes em `assets/css/styles.css` quando isso estiver dentro do escopo da tarefa.

## 6. HTML, SEO e Acessibilidade

Use HTML semântico com `header`, `nav`, `main`, `section`, `article`, `figure` e `footer` quando fizer sentido.

Regras:

- um único `<h1>` por página;
- hierarquia correta de headings;
- `alt` significativo em imagens importantes;
- `aria-hidden="true"` em decoração pura;
- foco visível em links e botões;
- links externos com `target="_blank"` devem usar `rel="noopener noreferrer"`;
- cada página deve ter `<title>`, `meta description`, `meta viewport` e Open Graph completo.

O Open Graph atual precisa de atenção porque `assets/images/couple/og-cover.jpg` é referenciado mas não existe.

## 7. Fotos, Galeria e Hero

Fotos são protagonistas. Nunca deformar imagens. Preserve proporção com `object-fit`, use `loading="lazy"` abaixo da dobra e informe `width`/`height` quando possível.

Estado atual:

- o hero usa `assets/images/couple/hero.jpg`;
- a galeria usa cinco imagens em `assets/images/couple/`;
- o carrossel é implementado em JavaScript nativo, sem biblioteca;
- as imagens `hero.jpg`, `gallery-01.jpg` e `gallery-02.jpg` ainda estão pesadas para entrega final.

Antes de adicionar novas imagens, otimize para WebP/AVIF ou JPEG comprimido em tamanho adequado. Não servir imagem de vários MB para miniatura.

## 8. Página Inicial

`index.html` contém atualmente:

- header fixo com navegação;
- hero com foto, nomes, data e CTA;
- seção de apresentação com placeholder;
- carrossel de fotos;
- seção de cerimônia;
- Google Maps Embed;
- link externo para abrir no Google Maps;
- footer com monograma e data.

Mantenha a home como uma composição editorial contínua, com ritmo calmo e visual de convite.

## 9. Página de Presentes

`presentes.html` contém:

- header e footer compartilhando a identidade da home;
- texto introdutório;
- grid renderizado por `assets/js/gifts.js`;
- modal de QR Code ao clicar em `Presentear`.

`assets/js/gifts.js` contém atualmente cinco presentes:

- Lanche;
- Carro;
- Vaca cabeluda;
- Café;
- Geladeira de monster.

Todos usam o mesmo arquivo `assets/images/gifts/qr-code.jpeg`. Isso é uma decisão atual do conteúdo, não um estado global.

Não implementar carrinho, checkout, reserva, compra, indisponibilidade ou confirmação sem uma fonte real de dados.

## 10. JavaScript

Use JavaScript apenas para interações necessárias.

Funções atuais:

- `setupMobileMenu`;
- `setupRevealOnScroll`;
- `setupCarousel`;
- `renderGifts`;
- `openGiftModal`;
- `closeGiftModal`;
- `setupGiftModal`.

Regras:

- funções pequenas e nomeadas por responsabilidade;
- validar se o elemento existe antes de manipulá-lo;
- manter progressive enhancement;
- evitar classes e abstrações sem necessidade;
- não criar SPA ou roteamento client-side;
- ao renderizar HTML a partir de dados, os dados devem ser controlados no próprio arquivo estático.

## 11. Google Maps

Preferir Google Maps Embed via `iframe`, sem API key. Sempre manter também um link "Abrir no Google Maps".

O projeto usa atualmente:

```text
https://www.google.com/maps?q=Igreja+Matriz+de+Baependi,+Baependi,+MG&output=embed
```

Não adicionar Maps JavaScript API sem necessidade.

## 12. Responsividade e Animações

Mobile-first. Validar visualmente, quando possível, em larguras próximas de:

- 360px;
- 390px;
- 768px;
- 1024px;
- 1440px.

Em telas pequenas:

- reduzir ornamentação quando competir com conteúdo;
- empilhar cards;
- garantir botões tocáveis;
- impedir transbordamento de texto, imagem e mapa.

Animações devem ser discretas, entre 150ms e 600ms, e respeitar `prefers-reduced-motion: reduce`. Sem parallax pesado, partículas ou efeitos 3D.

## 13. Segurança e Privacidade

Nunca inserir credenciais, tokens, API keys ou dados pessoais não fornecidos.

Não inserir HTML externo sem sanitização. Como este projeto é estático, prefira conteúdo controlado no repositório.

## 14. Fluxo de Trabalho

Para cada tarefa:

1. ler a solicitação;
2. consultar `PLANNING.md` e este arquivo;
3. inspecionar arquivos relevantes;
4. implementar a solução mais simples que resolve o pedido;
5. validar visual e funcionalmente;
6. reportar objetivamente o que mudou.

Antes de adicionar algo, pergunte:

- **Funcionalidade nova:** é necessária para um convidado usar o site?
- **Tecnologia nova:** HTML/CSS/JS nativos realmente não resolvem?
- **Abstração nova:** existe repetição real suficiente para justificar?

Mudanças arquiteturais grandes exigem explicar antes o problema atual, por que a estrutura atual não resolve, o que será proposto, arquivos afetados e por que vale a complexidade.

## 15. Git e Conteúdo Existente

Nunca usar comandos destrutivos de Git sem pedido explícito. Não usar `git reset --hard` nem `git checkout --` para apagar trabalho local.

Nunca apagar fotos, textos, dados ou arquivos de planejamento sem entender por que existem. Se algo parecer obsoleto, avise antes de remover.

Ao encontrar mudanças não feitas por você, assuma que vieram do responsável ou de outro agente. Trabalhe com elas e não reverta.
