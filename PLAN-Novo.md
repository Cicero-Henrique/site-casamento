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
