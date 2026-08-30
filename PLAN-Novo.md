# PLAN.md - Plano de Desenvolvimento

## 🎨 Sistema de Design (Design System)

Tenha como referência a imagem @imagem-referencia.png

### 1. Paleta de Cores e Efeitos (HEX/RGBA)
*   **Fundo Primário (Damasco/Tecido)**: `#091122` (Azul-marinho da meia-noite, quase preto nas sombras).
*   **Fundo do Rodapé (Footer)**: `#050a14` (Um tom ainda mais escuro e fechado para dar separação visual).
*   **Dourado Principal (Títulos e Moldura)**: `#D4AF37` ou `#C5A059` (Ouro envelhecido polido com efeito de degradê linear para simular brilho metálico).
*   **Texto de Apoio**: `#FDFBF7` (Off-white/Marfim para leitura confortável sobre o azul).

### 2. Tipografia Mapas de Fontes
*   **Nomes Principais ("Júlia & Cícero")**: Fonte estilo *Script/Caligráfica* com floreios dramáticos de alta costura (utilizar a fonte **Aphrodite Slim** via arquivo local ou `@font-face`).
*   **Menu, Datas e Cronômetro**: Fonte serifada clássica inspirada em inscrições romanas/medievais (utilizar **Cinzel** ou **Cinzel Decorative** do Google Fonts).
*   **Textos Longos/Citações**: Fonte serifada leve e tradicional para livros antigos (utilizar **EB Garamond** do Google Fonts).

---

## 🧱 Arquitetura de Componentes da Página (Layout)

### Cabeçalho (Navbar)
*   **Estrutura**: Flexbox fixo no topo com fundo transparente e `backdrop-filter: blur(12px)`.
*   **Esquerda**: Logotipo em iniciais com ornamentos medievais flanqueando (`✦ J & C ✦`).
*   **Centro**: Links de navegação em caixa alta (`INÍCIO`, `NOSSA HISTÓRIA`, `CERIMÔNIA`, etc.) com fonte *Cinzel*, espaçamento de letras largo (2px) e sublinhado dourado sutil na aba ativa.
*   **Direita**: Um pequeno ornamento heráldico ou flor-de-lis dourada isolada no canto para equilibrar a simetria com a logo.

### Bloco Central (Hero Component)
*   **Moldura Gótica Tridimensional**:
    *   Um container com formato de arco ogival perfeito (`border-top-left-radius` e `border-top-right-radius` acentuados).
    *   Borda dupla dourada fina com uma escultura/filigrana dourada no ápice superior externa ao arco.
    *   Imagem do casal centralizada ocupando 100% do arco com filtro sutil de contraste para misturar as cores da foto com o azul do fundo.
*   **Sobreposição de Texto (Typography Overlay)**:
    *   Os nomes "Júlia & Cícero" ficam centralizados verticalmente e posicionados ligeiramente acima da metade inferior do arco.
    *   A cor do texto usa um gradiente CSS que simula ouro refletindo luz.

### Rodapé da Seção (Status & Meta Data)
*   **Divisão Visual**: Uma linha dourada horizontal contínua de 1px cruza a tela de ponta a ponta, cortando a base da seção inicial.
*   **Bloco Esquerdo (Poesia)**: Citação romântica de Gustavo Adolfo Bécquer alinhada à esquerda com fonte *EB Garamond* em itálico e cor marfim suave.
*   **Bloco Central (Interação)**: O botão "ROLE PARA EXPLORAR". Um círculo dourado com uma estrela de 4 pontas interna, texto pequeno espaçado e um indicador em forma de seta (`∨`) logo abaixo, posicionado no centro absoluto da linha divisória.
*   **Bloco Direito (Cronômetro Regressivo)**:
    *   Texto "FALTAM" centralizado em caixa alta pequena.
    *   Contador numérico (`96 : 21 : 33 : 05`) em fonte serifada dourada grande.
    *   Legendas abaixo dos números (`DIAS`, `HORAS`, `MIN`, `SEG`) em letras minúsculas e tamanho reduzido.

---

## 🛠️ Passo a Passo para o Desenvolvimento do Código

1.  **Montagem do Fundo**: Aplicar a imagem de alta resolução com o padrão de damasco em modo `background-size: cover` e `background-attachment: fixed` na tag `body` para que os arabescos fiquem estáticos enquanto o usuário rola o site.
2.  **Criação do Arco por CSS**: Utilizar propriedades de bordas arredondadas e mascaramento de imagem (`overflow: hidden`) para criar o corte perfeito da foto do casal em formato de arco de catedral.
3.  **Refinamento do CSS Grid/Flexbox**: Usar o modelo de caixa para garantir a simetria milimétrica da tela, distribuindo o cabeçalho no topo, o arco no meio e dividindo o rodapé inferior em exatamente três colunas proporcionais de mesma altura.

---

## ✅ Status de Implementação (2026-08-29/30)

Revisão visual aplicada em `assets/css/styles.css` (sem redesenho, sem tocar em HTML/JS/conteúdo/foto real), comparando `index.html` com `imagem-referencia.png`. Resumo do que foi feito vs. o que ficou pendente:

### Feito
- **Fundo geral**: removido `background-blend-mode: overlay` no `body` (estava multiplicando a imagem `arabesco.png`, já navy+dourada, contra a cor navy, o que produzia um visual quase preto/acinzentado). Substituído por `linear-gradient` de tint sutil sobre a imagem, preservando o floral navy+dourado visível como na referência.
- **Header**: adicionada faixa navy translúcida com `backdrop-filter: blur`, borda dourada fina; monograma `J & C` em dourado com glow sutil; itens de menu em tom quente (`--text-warm`); indicador ativo/hover refeito como linha dourada animada + pequeno losango ornamental central (antes era só um `border-bottom` amarelo simples).
- **Hero — composição**: moldura em arco (`.hero-arch__frame`) ampliada em largura e altura (`clamp` maiores) e padding superior reduzido, para o conjunto ocupar mais a primeira dobra e reduzir o espaço vazio entre header e arco, como na referência.
- **Hero — nomes**: "Júlia & Cícero" aumentados significativamente de escala (elemento tipográfico dominante, como na referência) e com glow dourado sutil adicional via `drop-shadow`.
- **Hero — data/local**: mais espaçamento vertical, tracking maior, divisor mais largo.
- **Hero — rodapé (citação / botão / cronômetro)**: fundo com leve tint navy; citação em dourado com linha ornamental fina acima; botão "Role para explorar" com círculo navy sólido + borda dourada (antes o círculo parecia transparente/preto); cronômetro com números maiores e cor dourada menos saturada, mais linha ornamental acima.
- **Paleta**: novas variáveis (`--navy-deep`, `--navy-surface`, `--navy-overlay-strong/soft`, `--color-gold-muted/bright`, `--text-warm`, `--border-gold`) e `--color-gold` recalibrado para um dourado envelhecido menos amarelo (`#c6a15c` em vez de `#d4af37`). Documentado em `AGENTS.md` seção 5.

### Pendente / não reproduzido
- **Fonte "Aphrodite Slim"**: continua sem arquivo em `assets/fonts/`. O hero usa o fallback "Tangerine" (`--font-script`), mais fino e menos ornamentado que o script da referência. Assim que o `.woff2` licenciado for adicionado, a troca é automática via `@font-face` já existente em `styles.css`.
- **Cinzel / Cinzel Decorative** para menu/datas/cronômetro (sugerido neste plano) não foi adotado; o projeto segue usando `Cormorant Garamond` (`--font-heading`) para esses elementos, por ser a fonte já carregada e em uso consistente no restante do site. Se a troca para Cinzel for desejada, é uma decisão de conteúdo/tipografia a ser confirmada antes, pois afeta título, nav, cronômetro e cerimônia juntos.
- Testes visuais foram feitos apenas em viewport desktop (~1568px) via navegador local; breakpoints mobile/tablet (768px/480px) não foram tocados e devem continuar funcionando por usarem `clamp()`/unidades relativas, mas não foram verificados visualmente nesta rodada.
