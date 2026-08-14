# Planejamento - Site do Casamento

## 1. Visao Geral

Site estatico para o casamento de **Cícero e Júlia**, com duas paginas principais:

- `index.html`: landing page com apresentacao, fotos, informacoes da cerimonia e localizacao.
- `presentes.html`: lista de presentes simples, elegante e sem comportamento de e-commerce.

O projeto deve continuar pequeno por dentro e sofisticado por fora: HTML, CSS e JavaScript nativos, sem backend, banco de dados, framework ou dependencia desnecessaria.

## 2. Dados Oficiais

Essas informacoes sao definitivas e devem aparecer de forma consistente quando forem exibidas:

- **Noivos:** Cícero e Júlia
- **Data:** 28/11/2026
- **Horario:** 11:00
- **Local:** Igreja Matriz de Baependi

Nao inventar endereco completo, historia do casal, contatos, nomes de familiares ou textos pessoais finais sem fornecimento explicito.

## 3. Objetivos do MVP

O site deve permitir que os convidados:

- vejam uma abertura bonita com foto, nomes e data;
- entendam rapidamente quando e onde sera a cerimonia;
- visualizem fotos do casal;
- abram a localizacao da igreja no Google Maps;
- acessem a pagina de presentes;
- vejam cada presente em card proprio;
- cliquem em um presente e visualizem o QR Code correspondente, com o valor acima da imagem;
- naveguem bem pelo celular.

## 4. Escopo

Dentro do escopo inicial:

- pagina inicial;
- pagina de presentes;
- header discreto com `Inicio` e `Presentes`;
- hero com fotografia como protagonista;
- textos curtos de apresentacao;
- galeria simples;
- informacoes da cerimonia;
- Google Maps embed e link externo;
- cards de presentes estaticos;
- QR Codes dos presentes;
- responsividade mobile-first;
- SEO basico, favicon e Open Graph.

Fora do escopo inicial:

- RSVP;
- login;
- painel administrativo;
- carrinho;
- checkout;
- reserva ou status global de presentes;
- banco de dados;
- backend;
- CMS;
- integracoes complexas.

## 5. Estrutura Funcional

```text
/
|-- index.html
|-- presentes.html
|-- assets/
|   |-- css/styles.css
|   |-- js/main.js
|   |-- js/gifts.js
|   |-- images/
|   `-- icons/
|-- AGENTS.md
`-- PLANNING.md
```

A estrutura pode ser menor enquanto o projeto estiver simples. Nao criar pastas vazias.

## 6. Pagina Inicial

A home deve funcionar como uma composicao editorial continua, com ritmo calmo e visual de convite.

Secoes previstas:

- **Hero:** foto principal, nomes, data e chamada curta.
- **Apresentacao:** texto breve, com placeholders claros caso o texto final ainda nao exista.
- **Fotos:** grid, mosaico ou sequencia simples, sem biblioteca de carrossel.
- **Cerimonia:** data, horario, igreja e cidade com clareza.
- **Localizacao:** mapa incorporado e botao `Abrir no Google Maps`.

Prioridades:

- fotografia acima de ornamentos;
- texto sempre legivel;
- boa experiencia em telas pequenas;
- decoracao medieval apenas como influencia refinada, nunca como fantasia pesada.

## 7. Pagina de Presentes

A pagina de presentes deve manter a mesma identidade da home e parecer parte do casamento, nao uma loja.

Cada presente pode conter:

- nome;
- imagem;
- descricao curta opcional;
- valor;
- botao de acao;
- QR Code aberto ao clicar, com o valor do item acima da imagem.

Os dados devem permanecer estaticos, preferencialmente em `assets/js/gifts.js` se houver muitos itens.

Modelo sugerido:

```js
const gifts = [
  {
    id: "gift-001",
    name: "Nome do presente",
    description: "Descricao opcional",
    image: "assets/images/gifts/gift-001.webp",
    price: "R$ 250,00",
    qrCode: "assets/images/gifts/qr-gift-001.webp"
  }
];
```

Nao implementar estados como reservado, comprado ou indisponivel sem uma fonte real de dados.

## 8. Identidade Visual

A direcao visual deve ser:

```text
elegante + rustica + medieval sutil + romantica + leve
```

A referencia principal e a imagem `paleta.jpeg`: um convite claro em papel texturizado, com tipografia serifada, ornamentos botanicos finos, molduras delicadas e contraste entre azul profundo e bases claras.

Evitar:

- RPG, castelo, armadura ou fantasia sombria;
- pergaminho artificial muito amarelado;
- dourado brilhante;
- visual de marketplace;
- excesso de cards flutuantes;
- sombras modernas fortes;
- ornamentos competindo com as fotos.

## 9. Paleta Oficial

As cores abaixo devem ser centralizadas em variaveis CSS no `:root`.

| Papel na paleta | Cor | Hex | Uso principal |
| --- | --- | --- | --- |
| Noivo | Azul Marinho Profundo | `#1A1F2B` | destaque maximo, titulos, botoes, header e footer |
| Pais dos noivos | Azul Indigo Medio | `#3A4A68` | elegancia leve, titulos secundarios, divisores e hovers |
| Madrinhas | Azul Suavizado | `#5B6C8F` | destaque delicado, bordas secundarias, icones e detalhes |
| Padrinhos | Bege Claro Elegante | `#E5DDCF` | iluminacao da composicao, cards e areas suaves |
| Maes dos noivos | Champagne Fosco | `#DBC3A5` | aquecimento, molduras, linhas e ornamentos botanicos |
| Base Neutra | Base Neutra | `#E8DDCB` | decoracoes, superficies alternadas e apoio visual |
| Base Clara | Base Clara | `#F4F2EE` | fundo principal, leveza e iluminacao geral |

Variaveis recomendadas:

```css
:root {
  --color-navy: #1A1F2B;
  --color-indigo: #3A4A68;
  --color-soft-blue: #5B6C8F;
  --color-beige: #E5DDCF;
  --color-champagne: #DBC3A5;
  --color-neutral: #E8DDCB;
  --color-ivory: #F4F2EE;

  --color-text: #1A1F2B;
  --color-background: #F4F2EE;
}
```

Uso recomendado:

- fundo principal em `#F4F2EE`;
- texto principal em `#1A1F2B`;
- secoes alternadas em `#E8DDCB` ou `#E5DDCF`;
- ornamentos e linhas em `#DBC3A5`;
- detalhes discretos em `#3A4A68` e `#5B6C8F`;
- evitar `#DBC3A5` como texto longo em fundo claro.

## 10. Tipografia e Ornamentacao

Usar no maximo duas familias tipograficas.

Boas direcoes:

- titulos e nomes: Cormorant Garamond, Cinzel, EB Garamond ou Libre Baskerville;
- corpo: Cormorant Garamond, Lora, Libre Baskerville ou Georgia.

Ornamentos devem ser poucos e refinados:

- ramos botanicos;
- linhas finas;
- molduras discretas;
- divisores simetricos;
- monograma `C & J`.

## 11. Requisitos Tecnicos

- HTML semantico;
- CSS organizado, mobile-first e com variaveis;
- JavaScript apenas para interacoes necessarias;
- imagens otimizadas, com `loading="lazy"` abaixo da primeira dobra;
- foco visivel e contraste adequado;
- links externos com `rel="noopener noreferrer"` quando abrirem em nova aba;
- Google Maps via embed, sem API key;
- SEO basico em todas as paginas;
- Open Graph para compartilhamento no WhatsApp.

## 12. Responsividade

Validar visualmente em larguras aproximadas:

- 360px;
- 390px;
- 768px;
- 1024px;
- 1440px.

Em mobile:

- reduzir ornamentacao;
- empilhar cards;
- preservar margem lateral;
- garantir botoes tocaveis;
- impedir transbordamento de textos, imagens e mapa.

## 13. Criterios de Aceite

O MVP estara pronto quando:

- [ ] a home abrir corretamente;
- [ ] hero, nomes e data estiverem visiveis;
- [ ] fotos e textos principais estiverem adicionados;
- [ ] informacoes da cerimonia estiverem claras;
- [ ] mapa e link do Google Maps funcionarem;
- [ ] a pagina de presentes existir;
- [ ] presentes aparecerem em cards;
- [ ] clique no presente abrir o QR Code com valor acima;
- [ ] layout funcionar bem no celular;
- [ ] imagens estiverem otimizadas;
- [ ] titulo, descricao, favicon e Open Graph estiverem configurados;
- [ ] nao houver erros relevantes no console;
- [ ] site estiver publicado.
