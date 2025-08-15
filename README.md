# Curso de Inteligência Artificial: Do Básico ao Avançado

Este projeto contém uma apresentação completa sobre Inteligência Artificial, organizada em 27 slides HTML interativos.

## 📁 Estrutura do Projeto

```
ia_curso/
├── 01.html          # Slide de abertura
├── 02.html          # Sumário do curso
├── 03.html          # Introdução à IA
├── 04.html          # Histórico da IA
├── 05.html          # Tipos de IA
├── 06.html - 26.html # Slides adicionais
├── 27.html          # Slide final
├── pagination.js    # Sistema de navegação
├── carousel.css     # Estilos da navegação
└── README.md        # Este arquivo
```

## 🎯 Conteúdo dos Slides

### Slides Principais
- **01.html**: Slide de abertura com título do curso
- **02.html**: Sumário e objetivos do treinamento
- **03.html**: Introdução aos conceitos fundamentais de IA
- **04.html**: Histórico cronológico da evolução da IA
- **05.html**: Tipos de IA (Fraca vs Forte, ANI vs AGI vs ASI)

### Tópicos Abordados
- Conceitos básicos e histórico da IA
- Tipos de IA e suas diferenças
- Machine Learning e Deep Learning
- Aplicações práticas em diversos setores
- Desenvolvimento, ética e tendências futuras

## 🎨 Design e Tecnologias

### Estilo Visual
- **Tema**: Escuro com gradientes azuis
- **Cores principais**: 
  - Fundo: `#0a192f` (azul escuro)
  - Destaque: `#d831c9` (magenta)
  - Acentos: `#87ceeb` (azul claro)
- **Fonte**: Source Sans Pro (Google Fonts)
- **Ícones**: Material Icons

### Responsividade
- Layout otimizado para apresentações
- Dimensões padrão: 1280x720px
- Suporte a diferentes resoluções

## 🧭 Sistema de Navegação

### Funcionalidades
- **Navegação automática**: Detecta o slide atual baseado no nome do arquivo
- **Botões anterior/próximo**: Navegação sequencial
- **Contador de slides**: Exibe posição atual (ex: "02 / 27")
- **Dots de navegação**: Acesso direto a qualquer slide
- **Indicador visual**: Destaque do slide atual

### Arquivos de Navegação
- `pagination.js`: Script principal de navegação
- `carousel.css`: Estilos da interface de navegação

## 🚀 Como Usar

### Visualização Local
1. Abra qualquer arquivo `.html` em um navegador
2. Use os controles de navegação na parte inferior
3. Navegue sequencialmente ou clique nos dots para ir direto a um slide

### Navegação por Teclado
- **Setas esquerda/direita**: Navegar entre slides
- **Home**: Voltar ao primeiro slide
- **End**: Ir ao último slide

### Estrutura HTML Necessária
Para que a navegação funcione, cada slide deve conter:

```html
<div class="carousel-navigation">
    <a href="#" class="nav-btn" title="Slide anterior">‹</a>
    <div class="slide-counter"></div>
    <a href="#" class="nav-btn" title="Próximo slide">›</a>
    <div class="dots-container"></div>
</div>
```

E incluir os arquivos de suporte:
```html
<link rel="stylesheet" href="carousel.css">
<script src="pagination.js"></script>
```

## 📝 Personalização

### Modificar o Número de Slides
No arquivo `pagination.js`, altere a variável:
```javascript
const totalPages = 27; // Mude para o número desejado
```

### Alterar Cores e Estilos
Edite o arquivo `carousel.css` para personalizar:
- Cores dos botões
- Tamanho dos elementos
- Efeitos de hover
- Posicionamento da navegação

### Adicionar Novos Slides
1. Crie um novo arquivo HTML seguindo o padrão de numeração
2. Inclua a estrutura de navegação
3. Atualize o `totalPages` no `pagination.js` se necessário

## 🔧 Requisitos Técnicos

### Navegadores Suportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dependências
- Google Fonts (Source Sans Pro)
- Material Icons
- JavaScript ES6+

## 📄 Licença

Este projeto é destinado para uso educacional e de treinamento.

## 👥 Contribuição

Para contribuir com melhorias:
1. Mantenha o padrão de design existente
2. Teste a navegação em diferentes navegadores
3. Verifique a responsividade
4. Atualize este README se necessário

---

**Desenvolvido para treinamentos sobre Inteligência Artificial**
