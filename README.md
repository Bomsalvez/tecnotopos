# 🌐 TECNOTOPOS - Site Institucional

*Onde a lógica encontra sua forma final.*

## 📋 Descrição

Site institucional da **TECNOTOPOS**, uma empresa de tecnologia especializada em engenharia de software e arquitetura computacional. O design segue uma estética **gótica-minimalista com toques steampunk**, transmitindo inovação, intelectualidade e confiança técnica.

## 🎨 Design Visual

### Paleta de Cores
- **Preto**: `#0a0a0a` - Fundo principal
- **Antracito**: `#1a1a1a` - Fundo secundário
- **Cinza Grafite**: `#2a2a2a` - Elementos de interface
- **Latão**: `#cd7f32` - Cor de destaque principal
- **Bronze**: `#b87333` - Cor de destaque secundária
- **Prata**: `#c0c0c0` - Textos importantes
- **Branco**: `#ffffff` - Textos principais

### Tipografia
- **Títulos**: Playfair Display (serif) - Elegância e sofisticação
- **Corpo**: Inter (sans-serif) - Legibilidade e modernidade

### Elementos Visuais
- **Engrenagens rotativas** na seção hero
- **Partículas flutuantes** de dados
- **Padrões de circuitos** animados
- **Gradientes metálicos** em elementos de destaque
- **Animações sutis** de entrada e hover

## 🏗️ Estrutura do Projeto

```
tecnotopos/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript e animações
├── tecnotopos-logo-simplified.svg  # Logo da empresa
└── README.md           # Documentação
```

## 📱 Seções do Site

### 1. **Cabeçalho (Header)**
- Logo da empresa com efeito de brilho
- Menu de navegação com animações
- Slogan em destaque
- Design responsivo com menu mobile

### 2. **Seção Hero**
- Título principal com efeito de digitação
- Descrição da empresa
- Engrenagens animadas em rotação
- Botão call-to-action

### 3. **Quem Somos**
- Apresentação da empresa
- Padrão de circuitos animado
- Layout em grid responsivo

### 4. **Nosso Propósito**
- Citação destacada em bloco
- Fundo diferenciado
- Tipografia serifada

### 5. **Serviços**
- Grid de cards com ícones
- Efeitos hover elaborados
- Animações de entrada

### 6. **Para Quem Fazemos**
- Texto centralizado
- Destaque para público-alvo

### 7. **Nossa Visão**
- Declaração de visão
- Estilo minimalista

### 8. **Portfólio**
- Grid de projetos
- Placeholders animados
- Efeitos de hover

### 9. **Equipe**
- Cards dos membros
- Avatares estilizados
- Layout responsivo

### 10. **Contato**
- Informações de contato
- Formulário funcional
- Layout em duas colunas

### 11. **Rodapé**
- Logo e slogan
- Links rápidos
- Redes sociais
- Copyright

## ⚡ Funcionalidades

### Animações
- **Partículas de fundo** - Sistema de partículas em movimento
- **Engrenagens rotativas** - Animações CSS personalizadas
- **Efeitos de scroll** - Animações baseadas em Intersection Observer
- **Hover effects** - Transições suaves em elementos interativos
- **Typewriter effect** - Efeito de digitação no título principal

### Interatividade
- **Menu mobile** - Navegação responsiva
- **Scroll suave** - Navegação interna
- **Formulário de contato** - Simulação de envio
- **Cursor personalizado** - Efeito de cursor customizado
- **Parallax sutil** - Efeitos de profundidade

### Responsividade
- **Mobile-first** - Design adaptativo
- **Breakpoints** - 768px para dispositivos móveis
- **Grid flexível** - Layouts que se adaptam
- **Tipografia escalável** - Textos responsivos

## 🚀 Como Executar

1. **Clone ou baixe** os arquivos do projeto
2. **Abra o arquivo** `index.html` em um navegador moderno
3. **Ou use um servidor local**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (com http-server)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações
  - Grid e Flexbox para layout
  - CSS Variables para consistência
  - Keyframes para animações
- **JavaScript ES6+** - Interatividade
  - Classes ES6 para organização
  - Intersection Observer API
  - Canvas API para partículas
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

## 📱 Compatibilidade

- **Navegadores modernos**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, tablet, mobile
- **Versões mínimas**:
  - Chrome: 60+
  - Firefox: 55+
  - Safari: 12+
  - Edge: 79+

## 🎯 Características Técnicas

### Performance
- **Lazy loading** de animações
- **CSS otimizado** com variáveis
- **JavaScript modular** e eficiente
- **Imagens SVG** para escalabilidade

### Acessibilidade
- **HTML semântico** correto
- **Contraste adequado** de cores
- **Navegação por teclado** funcional
- **Textos alternativos** em imagens

### SEO
- **Meta tags** apropriadas
- **Estrutura de cabeçalhos** hierárquica
- **URLs internas** funcionais
- **Conteúdo estruturado**

## 🔧 Personalização

### Cores
As cores podem ser alteradas editando as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --color-brass: #cd7f32;     /* Cor principal */
    --color-bronze: #b87333;    /* Cor secundária */
    --color-black: #0a0a0a;     /* Fundo */
    /* ... outras cores */
}
```

### Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua os placeholders por imagens reais
- **Links**: Atualize URLs e informações de contato

### Animações
- **Velocidade**: Ajuste os valores de `animation-duration`
- **Partículas**: Modifique `particleCount` no JavaScript
- **Efeitos**: Personalize keyframes no CSS

## 📄 Licença

Este projeto foi desenvolvido para a **TECNOTOPOS** e está disponível para uso interno da empresa.

## 🚀 GitHub Actions

Este projeto utiliza GitHub Actions para automação de CI/CD (Integração Contínua/Entrega Contínua).

### 📋 Workflows Configurados

#### 1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
- **Trigger**: Push para `main`/`develop` e Pull Requests
- **Funcionalidades**:
  - ✅ Build e validação TypeScript
  - ✅ Análise de qualidade de código
  - ✅ Deploy automático para GitHub Pages
  - ✅ Notificações de status

#### 2. **Static Site Deployment** (`.github/workflows/static-deploy.yml`)
- **Trigger**: Push para `main`/`master`
- **Funcionalidades**:
  - ✅ Validação de arquivos estáticos
  - ✅ Deploy direto para GitHub Pages
  - ✅ Cópia automática dos arquivos `src/` para `dist/`

#### 3. **Development Checks** (`.github/workflows/development.yml`)
- **Trigger**: Push para branches de desenvolvimento
- **Funcionalidades**:
  - ✅ Análise de estrutura de arquivos
  - ✅ Validação HTML básica
  - ✅ Verificação de segurança
  - ✅ Análise de performance

### 🔧 Configuração

#### Pré-requisitos
1. **Habilitar GitHub Pages**:
   - Vá para `Settings` > `Pages`
   - Source: `GitHub Actions`

2. **Configurar Secrets** (se necessário):
   - `Settings` > `Secrets and variables` > `Actions`

#### Scripts NPM Disponíveis
```bash
npm run build      # Compila TypeScript
npm run dev        # Inicia servidor de desenvolvimento
npm run validate   # Valida estrutura do projeto
npm run test       # Executa testes
npm run lint       # Verifica TypeScript
npm run clean      # Limpa diretório dist/
```

### 🌐 Deploy Automático

O site é automaticamente deployado para:
```
https://[seu-usuario].github.io/[nome-do-repositorio]/
```

### 📊 Status dos Workflows

- ✅ **Build**: Validação e compilação
- ✅ **Test**: Execução de testes
- ✅ **Deploy**: Publicação automática
- ✅ **Quality**: Análise de código

### 🔍 Monitoramento

- **Actions Tab**: Visualize execuções dos workflows
- **Deployments**: Acompanhe deploys no GitHub Pages
- **Notifications**: Receba notificações de sucesso/falha

## 👥 Desenvolvimento

Desenvolvido com foco em:
- **Experiência do usuário** excepcional
- **Performance** otimizada
- **Manutenibilidade** do código
- **Escalabilidade** para futuras expansões
- **Automação** completa com GitHub Actions

---

**TECNOTOPOS** - *Onde a lógica encontra sua forma final.* 