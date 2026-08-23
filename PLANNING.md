# Planejamento - Site do Casamento

## 1. Visão Geral

Site estático para o casamento de **Júlia e Cícero**, com quatro páginas:

- `index.html`: página inicial com abertura, trilha sonora, contagem regressiva, história do casal e galeria de fotos.
- `cerimonia.html`: informações da cerimônia (data, horário, local) e localização com mapa.
- `curiosidades.html`: playlist completa, quiz descontraído sobre o casal e álbum colaborativo de fotos.
- `presentes.html`: lista de presentes simples, elegante e sem comportamento de e-commerce.

O projeto deve continuar pequeno por dentro e sofisticado por fora: HTML, CSS e JavaScript nativos, sem backend, banco de dados, framework ou dependência desnecessária.

## 2. Dados Oficiais

Essas informações são definitivas e devem aparecer de forma consistente quando forem exibidas:

- **Noivos:** Júlia e Cícero
- **Data:** 28 de novembro de 2026
- **Horário:** 11h
- **Local:** Igreja Matriz de Baependi
- **Cidade:** Baependi, MG

Não inventar endereço completo, história do casal, contatos, nomes de familiares ou textos pessoais finais sem fornecimento explícito.

## 3. Estado Atual

O site já possui uma versão funcional com:

- home estática em `index.html`, com trilha sonora mini, contagem regressiva, história do casal (texto final já preenchido) e galeria;
- página de cerimônia em `cerimonia.html`, com dados da cerimônia, mapa e trilha sonora mini;
- página de curiosidades em `curiosidades.html`, com playlist completa, quiz interativo e álbum colaborativo (link ainda pendente);
- página de presentes em `presentes.html`, com trilha sonora mini também presente;
- CSS central em `assets/css/styles.css`;
- interações gerais em `assets/js/main.js` (menu mobile, reveal on scroll, carrossel, contagem regressiva, quiz);
- dados e renderização dos presentes em `assets/js/gifts.js`;
- favicon SVG em `assets/icons/favicon.svg`;
- foto hero e galeria em `assets/images/couple/`;
- imagens de presentes e QR Code em `assets/images/gifts/`;
- arabesco de fundo em `assets/images/decor/arabesco.png`, agora repetido verticalmente (`background-repeat: repeat-y`);
- variantes descartadas do arabesco guardadas em `assets/images/descartadas/` (não usadas no site).

Pontos pendentes conhecidos:

- criar ou ajustar `assets/images/couple/og-cover.jpg`, pois ele é referenciado no Open Graph e ainda não existe;
- definir o link real do álbum colaborativo em `curiosidades.html` (atualmente `href="#"` com nota `[Link do álbum colaborativo a definir]`);
- adicionar o arquivo de fonte licenciado `assets/fonts/aphrodite-slim.woff2` (a `@font-face` já está declarada em `styles.css`, mas o arquivo ainda não existe; a pilha usa "Tangerine" como substituta enquanto isso);
- decidir se as imagens descartadas em `assets/images/descartadas/` devem ser removidas do repositório;
- otimizar imagens grandes antes de publicação final;
- validar console e layout em navegador;
- publicar o site.

## 4. Objetivos do MVP

O site deve permitir que os convidados:

- vejam uma abertura bonita com foto, nomes e data;
- ouçam a trilha sonora do casal direto na home, cerimônia e presentes;
- acompanhem a contagem regressiva até o casamento;
- entendam rapidamente quando e onde será a cerimônia;
- visualizem fotos do casal;
- abram a localização da igreja no Google Maps;
- se divirtam com um quiz curto sobre o casal;
- acessem o álbum colaborativo para enviar fotos da festa (quando o link for definido);
- acessem a página de presentes;
- vejam cada presente em card próprio;
- cliquem em um presente e visualizem o QR Code correspondente, com o valor acima da imagem;
- naveguem bem pelo celular.

## 5. Escopo

Dentro do escopo:

- página inicial;
- página de cerimônia;
- página de curiosidades;
- página de presentes;
- header discreto com `Início`, `Cerimônia`, `Curiosidades` e `Presentes`;
- hero com fotografia como protagonista;
- textos curtos de apresentação;
- galeria/carrossel simples em JS nativo;
- trilha sonora via embed do Spotify (versão mini recorrente e versão completa em Curiosidades);
- contagem regressiva até a data do casamento;
- quiz simples e descontraído sobre o casal, sem gamificação pesada;
- álbum colaborativo de fotos (link externo, sem upload/hospedagem própria);
- informações da cerimônia;
- Google Maps Embed e link externo;
- cards de presentes estáticos;
- modal com QR Code dos presentes;
- responsividade mobile-first;
- SEO básico, favicon e Open Graph.

Fora do escopo:

- RSVP;
- login;
- painel administrativo;
- carrinho;
- checkout;
- reserva ou status global de presentes;
- banco de dados;
- backend;
- CMS;
- integrações complexas;
- qualquer sincronização de estado entre convidados.

## 6. Estrutura Atual

```text
/
|-- index.html
|-- cerimonia.html
|-- curiosidades.html
|-- presentes.html
|-- AGENTS.md
|-- PLANNING.md
|-- README.md
|-- LICENSE
|-- robots.txt
|-- paleta.jpeg
`-- assets/
    |-- css/
    |   `-- styles.css
    |-- icons/
    |   `-- favicon.svg
    |-- images/
    |   |-- couple/
    |   |   |-- hero.jpg
    |   |   |-- gallery-01.jpg
    |   |   |-- gallery-02.jpg
    |   |   |-- gallery-03.jpeg
    |   |   |-- gallery-04.jpeg
    |   |   `-- gallery-05.jpeg
    |   |-- decor/
    |   |   `-- arabesco.png
    |   |-- descartadas/
    |   |   |-- arabesco.jpg
    |   |   |-- arabesco.png
    |   |   |-- arabesco1.jpeg
    |   |   |-- arabescos.png
    |   |   `-- arabescox.jpg
    |   `-- gifts/
    |       |-- cafe.jpg
    |       |-- carro.jpg
    |       |-- lanche.jpg
    |       |-- monster.jpg
    |       |-- qr-code.jpeg
    |       `-- vaca.jpg
    `-- js/
        |-- gifts.js
        `-- main.js
```

`assets/fonts/` ainda não existe: é o destino planejado para `aphrodite-slim.woff2`, referenciado em `styles.css` mas ainda não adicionado.

A estrutura pode ser menor se diretórios vazios deixarem de ser úteis. Não criar novas pastas vazias.

## 7. Página Inicial

A home deve funcionar como uma composição editorial contínua, com ritmo calmo e visual de convite.

Seções atuais:

- **Hero:** foto principal, nomes, data, horário e chamada curta (`Ver detalhes`, que leva a `cerimonia.html`).
- **Trilha sonora (mini):** embed compacto do Spotify (`#playlist-mini`), com autoplay, repetido também em `cerimonia.html` e `presentes.html`.
- **Contagem regressiva:** relógio com dias/horas/minutos/segundos até `2026-11-28T11:00:00-03:00`, calculado em JS (`setupCountdown` em `assets/js/main.js`), com texto alternativo definido em `data-after-text` para quando a data já tiver passado.
- **Apresentação:** texto final da "Nossa história" já preenchido (não é mais placeholder).
- **Fotos:** carrossel simples com cinco imagens.

Cerimônia e localização não vivem mais na home — foram movidas para `cerimonia.html` (ver seção 7B).

Prioridades:

- fotografia acima de ornamentos;
- texto sempre legível;
- boa experiência em telas pequenas;
- decoração medieval apenas como influência refinada, nunca como fantasia pesada.

## 7B. Página de Cerimônia

`cerimonia.html` concentra as informações práticas do grande dia:

- **Cerimônia:** lista de definição (`<dl>`) com data, horário, local e cidade.
- **Localização:** mapa do Google incorporado via `output=embed` (sem API key) e botão `Abrir no Google Maps` apontando para busca externa.
- **Trilha sonora (mini):** mesmo bloco `#playlist-mini` usado na home.

## 7C. Página de Curiosidades

`curiosidades.html` reúne conteúdos leves e de interação, sem se misturar com as informações práticas da cerimônia:

- **Trilha sonora (completa):** embed maior do Spotify (sem autoplay) e link `Ouvir no Spotify`.
- **Quiz:** perguntas e resultados definidos em `QUIZ_QUESTIONS` e `QUIZ_RESULTS` (`assets/js/main.js`), renderizados e controlados por `setupQuiz()`; sem respostas certas/erradas, apenas resultado de "time".
- **Álbum colaborativo:** convite para os convidados enviarem fotos da festa via link externo. O link ainda não foi definido (`href="#"`), com nota visível `[Link do álbum colaborativo a definir]` — substituir assim que o álbum existir.

## 8. Página de Presentes

A página de presentes deve manter a mesma identidade da home e parecer parte do casamento, não uma loja.

Comportamento atual:

- `presentes.html` carrega `assets/js/gifts.js`;
- os cards são renderizados no elemento `#giftsGrid`;
- cada card mostra imagem, nome, descrição, valor e botão `Presentear`;
- o clique abre o modal `#qrModal`;
- o modal mostra nome, valor e QR Code;
- `Escape`, botão de fechar e clique no fundo fecham o modal;
- abaixo da grade de presentes, a página também exibe o bloco de trilha sonora mini (`#playlist-mini`), igual ao da home e da cerimônia.

Dados atuais em `assets/js/gifts.js`:

```js
const qrCode = "assets/images/gifts/qr-code.jpeg";
const gifts = [
  {
    id: "gift-001",
    name: "Lanche",
    description: "Um belo lanche para o casal",
    image: "assets/images/gifts/lanche.jpg",
    price: "R$ 50,00",
    qrCode: qrCode
  }
];
```

O arquivo contém cinco itens no momento. Todos usam o mesmo QR Code compartilhado. Se no futuro cada item precisar ter um QR Code próprio, atualizar apenas os dados estáticos.

Não implementar estados como reservado, comprado ou indisponível sem uma fonte real de dados.

## 9. Identidade Visual

A direção visual deve ser:

```text
elegante + rústica + medieval sutil + romântica + leve
```

A referência principal é `paleta.jpeg`: um convite claro em papel texturizado, com tipografia serifada, ornamentos botânicos finos, molduras delicadas e contraste entre azul profundo e bases claras.

O visual atual está mais escuro que a referência base, usando azul marinho como fundo dominante. Isso é aceitável enquanto mantiver legibilidade, delicadeza e contraste com os tons claros.

Evitar:

- RPG, castelo, armadura ou fantasia sombria;
- pergaminho artificial muito amarelado;
- dourado brilhante;
- visual de marketplace;
- excesso de cards flutuantes;
- sombras modernas fortes;
- ornamentos competindo com as fotos.

## 10. Paleta Oficial

As cores abaixo devem ser centralizadas em variáveis CSS no `:root`.

| Papel na paleta | Cor | Hex | Uso principal |
| --- | --- | --- | --- |
| Noivo | Azul Marinho Profundo | `#1A1F2B` | fundo principal atual, destaque máximo, títulos, botões, header e footer |
| Pais dos noivos | Azul Índigo Médio | `#3A4A68` | seções alternadas, elegância leve, divisores e hovers |
| Madrinhas | Azul Suavizado | `#5B6C8F` | bordas secundárias, ícones e detalhes |
| Padrinhos | Bege Claro Elegante | `#E5DDCF` | superfícies suaves e áreas de apoio |
| Mães dos noivos | Champagne Fosco | `#DBC3A5` | aquecimento, linhas, detalhes e ornamentos botânicos |
| Base Neutra | Base Neutra | `#E8DDCB` | decorações, superfícies alternadas e apoio visual |
| Base Clara | Base Clara | `#F4F2EE` | texto claro, cards, fundo de favicon e áreas de respiro |

Variáveis atuais:

```css
:root {
  --color-navy: #1a1f2b;
  --color-indigo: #3a4a68;
  --color-soft-blue: #5b6c8f;
  --color-beige: #e5ddcf;
  --color-champagne: #dbc3a5;
  --color-neutral: #e8ddcb;
  --color-ivory: #f4f2ee;

  --color-text: var(--color-ivory);
  --color-text-soft: var(--color-champagne);
  --color-background: var(--color-navy);
  --color-surface: var(--color-indigo);
  --color-border: var(--color-soft-blue);
}
```

Evitar `#DBC3A5` como texto longo em fundo claro. Em áreas claras, usar azul marinho ou índigo para texto.

## 11. Tipografia e Ornamentação

Usar no máximo duas famílias tipográficas para leitura corrida; fontes de destaque (script/serif clean) podem complementar em pontos pontuais.

Estado atual (variáveis em `:root` de `assets/css/styles.css`):

- `--font-heading` e `--font-body`: `"Cormorant Garamond", "Georgia", serif` — títulos e corpo do texto;
- `--font-script`: `"Aphrodite Slim", "Tangerine", cursive` — fonte caligráfica de destaque; "Aphrodite Slim" é paga e ainda não foi adicionada em `assets/fonts/`, então hoje o site renderiza com "Tangerine";
- `--font-serif-clean`: `"EB Garamond", "Lora", serif` — usada em pontos que pedem um serifado mais limpo;
- Google Fonts carrega `Cormorant Garamond`, `Cinzel`, `EB Garamond` e `Tangerine` no `<head>` de todas as páginas; Cinzel segue carregada mas sem uso efetivo direto no CSS;
- ornamento principal é `assets/images/decor/arabesco.png`, agora repetido verticalmente no fundo (`background-repeat: repeat-y`);
- monograma atual: `J & C`.

Ornamentos devem ser poucos e refinados:

- ramos botânicos;
- linhas finas;
- molduras discretas;
- divisores simétricos;
- monograma.

## 12. Requisitos Técnicos

- HTML semântico;
- CSS organizado, mobile-first e com variáveis;
- JavaScript apenas para interações necessárias;
- imagens otimizadas, com `loading="lazy"` abaixo da primeira dobra;
- foco visível e contraste adequado;
- links externos com `rel="noopener noreferrer"` quando abrirem em nova aba;
- Google Maps via embed, sem API key;
- SEO básico em todas as páginas;
- Open Graph para compartilhamento no WhatsApp;
- conteúdo principal compreensível mesmo se o JavaScript falhar, dentro do possível para um site estático.

## 13. Responsividade

Validar visualmente em larguras aproximadas:

- 360px;
- 390px;
- 768px;
- 1024px;
- 1440px.

Em mobile:

- reduzir ornamentação;
- empilhar cards;
- preservar margem lateral;
- garantir botões tocáveis;
- impedir transbordamento de textos, imagens e mapa;
- conferir se o menu mobile abre, fecha e atualiza `aria-expanded`.

## 14. Critérios de Aceite

Status atual do MVP:

- [x] a home existe;
- [x] hero, nomes e data estão visíveis no HTML;
- [x] texto final de apresentação foi fornecido;
- [x] fotos principais estão adicionadas;
- [x] a página de cerimônia existe, com informações claras (data, horário, local, cidade);
- [x] mapa e link do Google Maps estão configurados;
- [x] contagem regressiva funciona e mostra texto alternativo após a data;
- [x] trilha sonora (mini) toca em home, cerimônia e presentes;
- [x] a página de curiosidades existe, com playlist completa e quiz funcionando;
- [ ] link do álbum colaborativo foi definido (hoje é `href="#"`);
- [x] a página de presentes existe;
- [x] presentes aparecem em cards via JS;
- [x] clique no presente abre o QR Code com valor acima;
- [ ] layout foi validado visualmente em mobile e desktop;
- [ ] imagens estão otimizadas para publicação final;
- [ ] `assets/images/couple/og-cover.jpg` existe e funciona no Open Graph;
- [ ] fonte "Aphrodite Slim" foi licenciada e adicionada em `assets/fonts/`;
- [x] título, descrição e favicon estão configurados;
- [ ] não há erros relevantes no console;
- [ ] site está publicado.

## 15. Próximas Ações Recomendadas

1. Corrigir ou criar a imagem `assets/images/couple/og-cover.jpg`.
2. Definir e adicionar o link real do álbum colaborativo em `curiosidades.html`.
3. Adicionar `assets/fonts/aphrodite-slim.woff2` quando a fonte for licenciada (ou remover a `@font-face` se a decisão for manter "Tangerine").
4. Otimizar imagens grandes da galeria, hero e presentes.
5. Decidir se `assets/images/descartadas/` deve ser removida do repositório.
6. Validar o layout em navegador nas larguras-alvo, incluindo as novas páginas `cerimonia.html` e `curiosidades.html`.
7. Revisar contraste em cards claros da página de presentes.
8. Publicar quando os conteúdos finais estiverem aprovados.
