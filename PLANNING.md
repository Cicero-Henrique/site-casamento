# Planejamento - Site do Casamento

## 1. Visão Geral

Site estático para o casamento de **Júlia e Cícero**, com duas páginas principais:

- `index.html`: página inicial com abertura, fotos, informações da cerimônia e localização.
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

- home estática em `index.html`;
- página de presentes em `presentes.html`;
- CSS central em `assets/css/styles.css`;
- interações gerais em `assets/js/main.js`;
- dados e renderização dos presentes em `assets/js/gifts.js`;
- favicon SVG em `assets/icons/favicon.svg`;
- foto hero e galeria em `assets/images/couple/`;
- imagens de presentes e QR Code em `assets/images/gifts/`;
- arabesco de fundo em `assets/images/decor/arabesco.png`.

Pontos pendentes conhecidos:

- criar ou ajustar `assets/images/couple/og-cover.jpg`, pois ele é referenciado no Open Graph e ainda não existe;
- otimizar imagens grandes antes de publicação final;
- substituir placeholders de texto quando os noivos fornecerem conteúdo final;
- validar console e layout em navegador;
- publicar o site.

## 4. Objetivos do MVP

O site deve permitir que os convidados:

- vejam uma abertura bonita com foto, nomes e data;
- entendam rapidamente quando e onde será a cerimônia;
- visualizem fotos do casal;
- abram a localização da igreja no Google Maps;
- acessem a página de presentes;
- vejam cada presente em card próprio;
- cliquem em um presente e visualizem o QR Code correspondente, com o valor acima da imagem;
- naveguem bem pelo celular.

## 5. Escopo

Dentro do escopo:

- página inicial;
- página de presentes;
- header discreto com `Início` e `Presentes`;
- hero com fotografia como protagonista;
- textos curtos de apresentação;
- galeria/carrossel simples em JS nativo;
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
    |   |-- decorative/
    |   |-- gifts/
    |   |   |-- cafe.jpg
    |   |   |-- carro.jpg
    |   |   |-- lanche.jpg
    |   |   |-- monster.jpg
    |   |   |-- qr-code.jpeg
    |   |   `-- vaca.jpg
    |   `-- textures/
    `-- js/
        |-- gifts.js
        `-- main.js
```

A estrutura pode ser menor se diretórios vazios deixarem de ser úteis. Não criar novas pastas vazias.

## 7. Página Inicial

A home deve funcionar como uma composição editorial contínua, com ritmo calmo e visual de convite.

Seções atuais:

- **Hero:** foto principal, nomes, data, horário e chamada curta.
- **Apresentação:** placeholder claro para texto futuro dos noivos.
- **Fotos:** carrossel simples com cinco imagens.
- **Cerimônia:** data, horário, igreja e cidade.
- **Localização:** mapa incorporado e botão `Abrir no Google Maps`.

Prioridades:

- fotografia acima de ornamentos;
- texto sempre legível;
- boa experiência em telas pequenas;
- decoração medieval apenas como influência refinada, nunca como fantasia pesada.

## 8. Página de Presentes

A página de presentes deve manter a mesma identidade da home e parecer parte do casamento, não uma loja.

Comportamento atual:

- `presentes.html` carrega `assets/js/gifts.js`;
- os cards são renderizados no elemento `#giftsGrid`;
- cada card mostra imagem, nome, descrição, valor e botão `Presentear`;
- o clique abre o modal `#qrModal`;
- o modal mostra nome, valor e QR Code;
- `Escape`, botão de fechar e clique no fundo fecham o modal.

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

Usar no máximo duas famílias tipográficas.

Estado atual:

- títulos e corpo usam `"Cormorant Garamond", "Georgia", serif`;
- a fonte Cinzel é carregada no HTML, mas não está em uso efetivo no CSS;
- ornamento principal é `assets/images/decor/arabesco.png`;
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
- [ ] texto final de apresentação foi fornecido;
- [x] fotos principais estão adicionadas;
- [x] informações da cerimônia estão claras;
- [x] mapa e link do Google Maps estão configurados;
- [x] a página de presentes existe;
- [x] presentes aparecem em cards via JS;
- [x] clique no presente abre o QR Code com valor acima;
- [ ] layout foi validado visualmente em mobile e desktop;
- [ ] imagens estão otimizadas para publicação final;
- [ ] `assets/images/couple/og-cover.jpg` existe e funciona no Open Graph;
- [x] título, descrição e favicon estão configurados;
- [ ] não há erros relevantes no console;
- [ ] site está publicado.

## 15. Próximas Ações Recomendadas

1. Corrigir ou criar a imagem `assets/images/couple/og-cover.jpg`.
2. Otimizar imagens grandes da galeria, hero e presentes.
3. Substituir o placeholder da seção "Nossa história".
4. Validar o layout em navegador nas larguras-alvo.
5. Revisar contraste em cards claros da página de presentes.
6. Publicar quando os conteúdos finais estiverem aprovados.
