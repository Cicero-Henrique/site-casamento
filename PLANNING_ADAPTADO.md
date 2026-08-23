# Planejamento - Site do Casamento

## 1. Visão Geral

Site estático para o casamento de **Júlia e Cícero**, com duas páginas principais:

- `index.html`: página inicial com abertura visual inspirada fielmente no modelo fornecido, seguida das demais seções do casamento.
- `presentes.html`: lista de presentes simples, elegante e sem comportamento de e-commerce.

O projeto deve continuar pequeno por dentro e sofisticado por fora: HTML, CSS e JavaScript nativos, sem backend, banco de dados, framework ou dependência desnecessária.

### Regra de prioridade para a home

Para a **primeira dobra da página inicial**, a imagem de referência fornecida pelo usuário é a fonte de verdade para **composição, proporções, espaçamento, escala, alinhamento e hierarquia visual**. O `PLANNING.md` é a fonte de verdade para **conteúdo e dados reais**.

Isso significa:

- reproduzir a geometria do modelo, não a geometria da implementação atual;
- manter o background existente, conforme solicitado;
- não copiar dados fictícios presentes no mockup;
- não inventar novos dados para preencher espaços do layout;
- se houver conflito entre o mockup e os dados oficiais, preservar o visual do mockup e usar os dados oficiais.

## 2. Dados Oficiais

Estas informações são definitivas e devem aparecer de forma consistente quando forem exibidas:

- **Noivos:** Júlia e Cícero
- **Data:** 28 de novembro de 2026
- **Horário:** 11h
- **Local:** Igreja Matriz de Baependi
- **Cidade:** Baependi, MG

### Regra obrigatória contra dados fictícios

O modelo visual contém textos meramente ilustrativos. Eles **não devem ser copiados como conteúdo real**.

Em especial:

- nunca usar `Salvador, Bahia`;
- nunca substituir a cidade oficial por uma cidade retirada da imagem de referência;
- não inventar endereço completo;
- não inventar história do casal;
- não inventar contatos;
- não inventar nomes de familiares;
- não inventar textos pessoais finais;
- não inventar horário, local ou cidade para “combinar” com o mockup.

Quando o local aparecer de forma curta na abertura, usar **`BAEPENDI, MG`**. Quando a seção de cerimônia exibir detalhes, usar **`Igreja Matriz de Baependi`**, **`28 de novembro de 2026`**, **`11h`** e **`Baependi, MG`**.

## 3. Estado Atual e Problema a Corrigir

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

A implementação atual da home deve ser considerada **visualmente incorreta** na primeira dobra. Os principais problemas observados nas capturas da implementação são:

- escala geral maior do que a referência;
- hero alto demais e empurrando a faixa inferior para fora da primeira dobra;
- moldura central ocupando altura excessiva;
- cabeçalho com aparência de barra sólida, enquanto o modelo integra o menu ao próprio fundo;
- logotipo/monograma e navegação com posições e espaçamentos diferentes da referência;
- imagem principal com enquadramento e proporção diferentes do modelo;
- nomes sobre a foto com escala e posicionamento diferentes;
- data/local fora da composição prevista no modelo;
- faixa inferior não visível integralmente dentro do primeiro viewport;
- contador, citação e chamada para rolar sem a mesma estrutura horizontal do modelo;
- conteúdo fictício do mockup sendo usado como se fosse dado real.

O objetivo desta revisão é corrigir **a composição inteira da primeira dobra**, não apenas trocar fontes ou ajustar margens pontualmente.

## 4. Objetivos do MVP

O site deve permitir que os convidados:

- vejam uma abertura visualmente fiel ao modelo, com foto, nomes e data;
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
- reconstrução visual completa da primeira dobra da home;
- header discreto e integrado ao fundo;
- hero central em moldura ogival/arqueada;
- foto real do casal como protagonista;
- nomes, data e cidade dentro da mesma hierarquia do modelo;
- faixa inferior com citação, chamada de rolagem e contador;
- textos curtos de apresentação;
- galeria/carrossel simples em JS nativo;
- informações da cerimônia;
- Google Maps Embed e link externo;
- cards de presentes estáticos;
- modal com QR Code dos presentes;
- responsividade mobile-first;
- SEO básico, favicon e Open Graph.

Fora do escopo:

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

Uma eventual área visual chamada **“Confirmação”** pode existir como âncora/elemento de navegação somente quando houver conteúdo real definido. Não implementar formulário de RSVP ou fluxo de confirmação sem solicitação explícita.

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

## 7. Página Inicial — Especificação Visual Obrigatória

A home deve funcionar como uma composição editorial contínua, com ritmo calmo e visual de convite. A **primeira dobra deve reproduzir o modelo com máxima fidelidade possível**, preservando o background atual.

### 7.1 Viewport de referência

A imagem-modelo fornecida possui aproximadamente **1672 × 941 px**. Essa proporção deve ser usada como referência principal de desktop para aferir escala.

A implementação deve ser validada especialmente em **1440 × 900**, **1672 × 941** e **1920 × 1080**.

No desktop, a primeira dobra deve caber em **um único viewport**, sem exigir rolagem para revelar a faixa inferior. Evitar um hero com `min-height` maior que a viewport somado ao header.

Requisito estrutural:

```css
.home-hero {
  min-height: 100svh;
  overflow: hidden;
}
```

A composição interna deve ser dimensionada para que **header + hero central + faixa inferior** caibam dentro de `100svh` no desktop de referência.

### 7.2 Background

O **background existente não precisa ser alterado**.

Não substituir o arabesco/textura atual apenas para aproximar o mockup. Toda a adaptação deve se concentrar em:

- header;
- navegação;
- moldura central;
- escala e crop da foto;
- tipografia;
- nomes;
- data/local;
- ornamentos frontais;
- faixa inferior;
- contador;
- espaçamentos gerais.

### 7.3 Header

O header do desktop deve seguir o comportamento visual do modelo:

- fundo transparente ou visualmente integrado ao background, sem parecer uma barra azul sólida separada;
- altura visual aproximada de **64–72 px**;
- monograma `J & C` posicionado à esquerda, com ornamentos pequenos e dourados;
- navegação centralizada horizontalmente;
- espaçamento amplo entre itens;
- tipografia serifada em caixa alta, pequena, com tracking perceptível;
- item ativo com linha dourada fina e pequeno ornamento central;
- ornamento discreto na extremidade direita, em vez de um elemento chamativo.

A navegação deve refletir somente destinos reais. A aparência pode seguir o modelo, mas rótulos sem seção real não devem apontar para conteúdo inexistente.

Prioridade de itens atualmente úteis:

- `INÍCIO`
- `NOSSA HISTÓRIA` — somente se houver seção/placeholder explícito
- `CERIMÔNIA`
- `PRESENTES`
- `GALERIA`

`CONFIRMAÇÃO` e `CONTATO` só entram quando houver conteúdo real correspondente.

### 7.4 Moldura principal do hero

A moldura central é o principal elemento de composição e deve ser **menor do que na implementação atual**.

No viewport de referência de 1672 × 941 px:

- largura visual alvo da moldura: aproximadamente **500–530 px**;
- altura visual alvo: aproximadamente **650–690 px**;
- centro horizontal exatamente alinhado ao centro da viewport;
- topo da moldura por volta de **110–130 px** abaixo do topo da página;
- base visual chegando pouco antes da faixa inferior, sem ultrapassá-la;
- proporção alta, estreita e elegante;
- arco ogival/gótico suave, não um retângulo com `border-radius` simples;
- borda dourada fina, idealmente dupla ou com linha interna sutil;
- flor-de-lis/ornamento no topo central da moldura.

Usar `clamp()` para impedir que a moldura cresça excessivamente em monitores largos. Não deixar a largura do hero depender apenas de `vw`.

Direção recomendada:

```css
.hero-frame {
  width: clamp(360px, 31vw, 520px);
  height: min(72svh, 680px);
}
```

Os valores finais podem variar alguns pixels após comparação visual, mas a referência deve continuar sendo o mockup, não a versão atual.

### 7.5 Foto do casal

Usar a **foto real disponível no projeto**, não uma imagem fictícia do modelo.

A foto deve preencher a moldura com `object-fit: cover` e crop controlado por `object-position`, para que a composição fique semelhante ao modelo sem distorcer a imagem.

Requisitos:

- sem esticar a foto;
- sem deixar bordas vazias;
- sem permitir que a imagem dite a altura do hero;
- o container define a proporção; a imagem se adapta ao container;
- ajustar `object-position` por breakpoint se necessário;
- o recorte deve favorecer rostos e tronco, como na composição do modelo.

### 7.6 Nomes sobre a foto

Os nomes `Júlia & Cícero` devem aparecer como elemento caligráfico central, na metade inferior da foto, seguindo a escala do modelo.

Requisitos:

- dourado claro/champagne;
- fonte script/caligráfica apenas para os nomes, se já houver uma opção disponível ou se for adicionada de forma controlada;
- `Júlia` acima e à esquerda do `&`;
- `Cícero` maior e abaixo, ocupando a região central inferior;
- não deixar o texto cair para o peito/rodapé da imagem como na implementação atual;
- não usar sombra pesada;
- permitir apenas brilho sutil para legibilidade;
- manter os nomes dentro da moldura em todas as larguras.

Se uma terceira família tipográfica for necessária apenas para a assinatura dos nomes, ela é permitida como exceção visual específica. Corpo e navegação continuam limitados às famílias serifadas principais.

### 7.7 Data e cidade dentro do hero

Abaixo dos nomes, ainda dentro da moldura, deve existir um pequeno divisor ornamental e, em seguida:

- `28 DE NOVEMBRO DE 2026`
- `BAEPENDI, MG`

A data deve ter tracking amplo e tamanho pequeno. A cidade deve ser menor e mais discreta.

**Não usar `SALVADOR, BAHIA`.** Esse texto pertence apenas ao mockup visual e está incorreto para o projeto.

O horário **11h** não precisa aparecer nessa linha caso prejudique a fidelidade do hero; ele deve continuar claramente visível na seção de cerimônia. Se houver espaço e a solução visual for aprovada, pode ser incorporado de forma discreta sem alterar a hierarquia principal.

### 7.8 Faixa inferior da primeira dobra

A faixa inferior deve estar **visível na primeira dobra**, como no modelo, e não aparecer apenas após scroll.

No desktop de referência, ela deve ocupar aproximadamente os **135–155 px inferiores** do viewport e ter uma linha horizontal dourada fina no topo.

Estrutura em três colunas:

1. **Esquerda — citação**
   - texto em itálico;
   - autor abaixo em caixa alta menor;
   - usar a citação atual apenas se ela já tiver sido aprovada no projeto;
   - se for placeholder, deixar claro no HTML/comentário para futura substituição.

2. **Centro — chamada de rolagem**
   - medalhão/ornamento circular sobre a linha divisória;
   - texto `ROLE PARA EXPLORAR`;
   - pequena seta/chevron para baixo;
   - centralizado exatamente com a moldura principal.

3. **Direita — contador**
   - título `FALTAM`;
   - quatro grupos: dias, horas, min, seg;
   - números grandes e dourados;
   - unidades pequenas em caixa alta;
   - separadores discretos entre os valores;
   - alinhamento e largura semelhantes ao bloco do modelo.

O contador deve usar a data oficial de **28/11/2026**. Caso seja implementado com JavaScript, o horário-alvo deve ser coerente com o evento oficial, **11h**, e o timezone deve ser definido de maneira estável para evitar contagem diferente entre dispositivos.

### 7.9 Relação entre hero e faixa inferior

O erro atual de escala não deve ser corrigido aumentando a página. Deve ser corrigido **reduzindo e reposicionando o hero**.

Critério obrigatório no desktop:

- topo do header visível;
- moldura inteira visível;
- data e cidade visíveis;
- linha divisória inferior visível;
- citação visível;
- chamada central visível;
- contador visível;
- tudo isso simultaneamente em um viewport de aproximadamente 1672 × 941 px.

Se qualquer um desses elementos exigir rolagem no viewport de referência, a escala está incorreta.

### 7.10 Demais seções da home

Após a primeira dobra:

- **Nossa história / Apresentação:** placeholder claro para texto futuro dos noivos;
- **Fotos:** carrossel simples com cinco imagens;
- **Cerimônia:** data, horário, igreja e cidade;
- **Localização:** mapa incorporado e botão `Abrir no Google Maps`.

Prioridades gerais:

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

Para a home, a nova referência visual prioritária é a imagem-modelo anexada pelo usuário: fundo azul-marinho ornamentado, composição simétrica, moldura ogival central, dourado envelhecido discreto, tipografia editorial e faixa inferior estruturada.

A referência `paleta.jpeg` continua válida para cores e atmosfera geral.

Evitar:

- RPG, castelo, armadura ou fantasia sombria;
- pergaminho artificial muito amarelado;
- dourado brilhante saturado;
- visual de marketplace;
- excesso de cards flutuantes;
- sombras modernas fortes;
- ornamentos competindo com as fotos;
- header em bloco sólido quando o mockup pede integração ao fundo;
- hero exageradamente grande;
- texto fictício para preencher composição.

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

Para ornamentos frontais e textos dourados da primeira dobra, preferir um champagne/dourado fosco derivado da paleta, evitando amarelo puro ou efeito metálico artificial.

## 11. Tipografia e Ornamentação

Tipografia-base:

- navegação, datas, pequenas legendas e títulos editoriais: serifada de alto contraste, com caixa alta e tracking;
- corpo: serifada legível;
- nomes do casal: caligrafia/script elegante semelhante ao modelo.

Estado atual e orientação:

- `Cormorant Garamond` pode continuar como serifada principal;
- `Cinzel` pode ser usada com parcimônia em navegação, datas e pequenas legendas, se aproximar melhor o modelo;
- uma fonte script pode ser adicionada exclusivamente para `Júlia & Cícero`, se necessário;
- manter fallbacks seguros em `Georgia, serif`;
- evitar usar a mesma fonte e o mesmo peso em todos os elementos, porque o modelo depende de contraste tipográfico.

Ornamentos devem ser refinados e simétricos:

- ramos botânicos;
- linhas finas;
- moldura ogival;
- flor-de-lis no topo do hero;
- divisores simétricos;
- medalhão circular na chamada de rolagem;
- monograma `J & C`.

O objetivo não é adicionar mais ornamentos, e sim **posicioná-los com a mesma disciplina do modelo**.

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
- conteúdo principal compreensível mesmo se o JavaScript falhar, dentro do possível para um site estático;
- não usar dimensões intrínsecas da foto para determinar o tamanho do hero;
- evitar valores fixos que só funcionem em uma única resolução;
- usar `clamp()`, `min()`, `max()`, `svh` e media queries quando úteis para manter a composição;
- o contador deve degradar de forma segura se JavaScript estiver desativado.

## 13. Responsividade

Validar visualmente em larguras aproximadas:

- 360px;
- 390px;
- 768px;
- 1024px;
- 1440px;
- 1672px;
- 1920px.

### Desktop

Em desktop, preservar a composição do modelo e impedir crescimento excessivo do hero.

Regras:

- limitar a largura máxima da moldura;
- limitar a altura pelo viewport;
- manter a faixa inferior na primeira dobra;
- manter o centro da moldura, o medalhão e a chamada de rolagem no mesmo eixo vertical;
- evitar que o header aumente de altura em telas largas;
- não aumentar fontes proporcionalmente apenas porque a viewport ficou maior.

### Tablet

Em tablet:

- reduzir espaçamento da navegação;
- diminuir a moldura sem perder o formato ogival;
- permitir simplificação da faixa inferior;
- contador pode reduzir tamanho dos números;
- manter data/local legíveis.

### Mobile

Em mobile:

- reduzir ornamentação;
- usar menu compacto/hambúrguer quando necessário;
- não tentar preservar a composição horizontal de três colunas da faixa inferior;
- empilhar citação, chamada de rolagem e contador ou priorizar apenas os blocos essenciais;
- preservar margem lateral;
- garantir botões tocáveis;
- impedir transbordamento de textos, imagens e mapa;
- manter nomes dentro da foto;
- ajustar `object-position` da foto se necessário;
- conferir se o menu mobile abre, fecha e atualiza `aria-expanded`.

A fidelidade “pixel próxima” é exigida prioritariamente no desktop de referência. No mobile, priorizar a mesma identidade e hierarquia, não uma miniatura literal do desktop.

## 14. Processo de Implementação e Comparação Visual

A correção da home deve ser feita em ciclos de comparação visual, e não apenas por interpretação do CSS.

Ordem recomendada:

1. manter o background atual;
2. corrigir a altura total da primeira dobra para `100svh`;
3. reconstruir o header;
4. dimensionar e centralizar a moldura principal;
5. ajustar o crop da foto;
6. posicionar nomes;
7. posicionar divisor, data e cidade;
8. criar a faixa inferior dentro da primeira dobra;
9. alinhar citação, medalhão e contador;
10. só depois ajustar microtipografia e ornamentos.

Após cada ciclo, comparar captura do site com a imagem-modelo no **mesmo tamanho de viewport**. Não usar capturas com dimensões diferentes para concluir que a escala está correta.

### Tolerância visual esperada

No desktop de referência, considerar incorreto se houver diferença evidente em:

- largura da moldura;
- altura da moldura;
- posição vertical do hero;
- posição da faixa inferior;
- proporção do header;
- alinhamento do eixo central;
- escala dos nomes;
- escala do contador.

Pequenas diferenças de alguns pixels são aceitáveis. Diferenças de dezenas de pixels ou elementos saindo da primeira dobra não são.

## 15. Critérios de Aceite

Status do MVP e novos critérios da home:

- [x] a home existe;
- [x] fotos principais estão adicionadas;
- [x] página de presentes existe;
- [x] presentes aparecem em cards via JS;
- [x] clique no presente abre o QR Code com valor acima;
- [ ] primeira dobra reconstruída para seguir o modelo visual;
- [ ] background atual preservado;
- [ ] header integrado ao fundo, sem barra sólida destoante;
- [ ] moldura central dimensionada aproximadamente como no modelo;
- [ ] moldura, data/local e faixa inferior cabem simultaneamente em 1672 × 941;
- [ ] foto real usa `object-fit: cover` sem distorção;
- [ ] nomes `Júlia & Cícero` seguem a hierarquia e posição do modelo;
- [ ] abertura usa `BAEPENDI, MG`, nunca `SALVADOR, BAHIA`;
- [ ] seção de cerimônia usa Igreja Matriz de Baependi, 28/11/2026, 11h e Baependi/MG;
- [ ] contador usa a data oficial do casamento;
- [ ] citação, chamada de rolagem e contador aparecem na primeira dobra desktop;
- [ ] navegação não aponta para conteúdo inexistente;
- [ ] texto final de apresentação foi fornecido ou permanece identificado como placeholder;
- [x] informações da cerimônia estão definidas no planejamento;
- [x] mapa e link do Google Maps estão previstos/configurados;
- [ ] layout validado visualmente em 360, 390, 768, 1024, 1440, 1672 e 1920 px;
- [ ] imagens otimizadas para publicação final;
- [ ] `assets/images/couple/og-cover.jpg` existe e funciona no Open Graph;
- [x] título, descrição e favicon estão configurados;
- [ ] não há erros relevantes no console;
- [ ] site está publicado.

## 16. Próximas Ações Recomendadas

1. Refazer a primeira dobra de `index.html` e os estilos correspondentes em `assets/css/styles.css` seguindo a seção 7 deste documento.
2. Preservar `assets/images/decor/arabesco.png`/background existente e não gastar esforço recriando o fundo.
3. Remover qualquer conteúdo fictício herdado do mockup e substituir somente pelos dados oficiais da seção 2.
4. Corrigir escala do hero antes de qualquer refinamento decorativo.
5. Garantir que a faixa inferior esteja visível sem scroll no viewport de referência.
6. Ajustar `object-fit`/`object-position` da foto real dentro da nova moldura.
7. Validar a home por captura lado a lado no mesmo viewport do modelo, especialmente 1672 × 941.
8. Depois da home estar fiel, revisar as demais seções e a página de presentes para consistência visual.
9. Corrigir ou criar `assets/images/couple/og-cover.jpg`.
10. Otimizar imagens grandes da galeria, hero e presentes.
11. Substituir placeholders somente quando conteúdo real for fornecido.
12. Publicar quando os conteúdos finais e a comparação visual estiverem aprovados.

## 17. Instrução Direta para o Codex

Ao implementar este planejamento, **não trate a captura atual do site como base a ser refinada**. Trate a primeira dobra atual como uma composição a ser reconstruída.

A ordem de prioridade é:

```text
1. geometria e escala do modelo
2. dados oficiais deste PLANNING.md
3. foto real e assets existentes
4. responsividade
5. microdetalhes decorativos
```

Não alterar o background, salvo se houver um problema técnico real. Todo o restante da primeira dobra pode e deve ser reposicionado ou redimensionado para aproximar o resultado do modelo.

Não copiar conteúdo fictício da imagem de referência. A imagem é referência de **design**, não de **dados**.
