// Configuração das partículas de fundo
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.init();
        this.animate();
    }
    
    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Criar partículas
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Atualizar posição
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Borda
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // Desenhar partícula
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(205, 127, 50, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Sistema de animação de scroll
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, this.observerOptions);
        
        // Observar elementos
        const elements = document.querySelectorAll('.section, .service-card, .portfolio-item, .team-member');
        elements.forEach(el => this.observer.observe(el));
    }
}

// Menu mobile
class MobileMenu {
    constructor() {
        this.toggle = document.querySelector('.nav-toggle');
        this.menu = document.querySelector('.nav-menu');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.toggleMenu());
        
        // Fechar menu ao clicar em um link
        const menuLinks = document.querySelectorAll('.nav-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }
    
    toggleMenu() {
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            this.menu.style.display = 'flex';
            this.menu.style.flexDirection = 'column';
            this.menu.style.position = 'absolute';
            this.menu.style.top = '100%';
            this.menu.style.left = '0';
            this.menu.style.width = '100%';
            this.menu.style.background = 'rgba(10, 10, 10, 0.98)';
            this.menu.style.backdropFilter = 'blur(10px)';
            this.menu.style.borderTop = '1px solid var(--color-brass)';
            this.menu.style.padding = '1rem';
        } else {
            this.closeMenu();
        }
    }
    
    closeMenu() {
        this.isOpen = false;
        this.menu.style.display = 'none';
    }
}

// Efeitos de hover para cards
class HoverEffects {
    constructor() {
        this.init();
    }
    
    init() {
        const cards = document.querySelectorAll('.service-card, .portfolio-item, .team-member');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => this.addHoverEffect(e.target));
            card.addEventListener('mouseleave', (e) => this.removeHoverEffect(e.target));
        });
    }
    
    addHoverEffect(card) {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(205, 127, 50, 0.3)';
    }
    
    removeHoverEffect(card) {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '';
    }
}

// Formulário de contato
class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form form');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Simular envio
        const submitBtn = this.form.querySelector('.submit-button');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Mensagem Enviada!';
            submitBtn.style.background = 'var(--gradient-bronze)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'var(--gradient-brass)';
                this.form.reset();
            }, 2000);
        }, 1500);
    }
}

// Efeitos de texto
class TextEffects {
    constructor() {
        this.init();
    }
    
    init() {
        // Efeito de digitação para o título principal
        this.typewriterEffect();
        
        // Efeito de destaque para palavras-chave
        this.highlightKeywords();
    }
    
    typewriterEffect() {
        const title = document.querySelector('.hero-title');
        if (!title) return;
        
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            title.textContent += text.charAt(i);
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
                title.style.borderRight = 'none';
            }
        }, 100);
        
        title.style.borderRight = '2px solid var(--color-brass)';
    }
    
    highlightKeywords() {
        const keywords = document.querySelectorAll('strong');
        keywords.forEach(keyword => {
            keyword.style.color = 'var(--color-brass)';
            keyword.style.textShadow = '0 0 5px var(--color-brass)';
        });
    }
}

// Smooth scroll para links internos
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Efeitos de parallax sutil
class ParallaxEffects {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-visual, .circuit-pattern');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todos os sistemas
    new ParticleSystem();
    new ScrollAnimations();
    new MobileMenu();
    new HoverEffects();
    new ContactForm();
    new TextEffects();
    new SmoothScroll();
    new ParallaxEffects();
    
    // Efeito de loading
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Efeitos adicionais para engrenagens
document.addEventListener('DOMContentLoaded', () => {
    const gears = document.querySelectorAll('.gear');
    
    gears.forEach((gear, index) => {
        // Adicionar dentes às engrenagens
        const teeth = 12;
        const radius = gear.offsetWidth / 2;
        
        for (let i = 0; i < teeth; i++) {
            const angle = (i * 360) / teeth;
            const x = radius + Math.cos(angle * Math.PI / 180) * (radius - 10);
            const y = radius + Math.sin(angle * Math.PI / 180) * (radius - 10);
            
            const tooth = document.createElement('div');
            tooth.style.position = 'absolute';
            tooth.style.width = '4px';
            tooth.style.height = '15px';
            tooth.style.background = 'var(--color-brass)';
            tooth.style.left = x + 'px';
            tooth.style.top = y + 'px';
            tooth.style.transform = `rotate(${angle}deg)`;
            tooth.style.transformOrigin = 'center';
            
            gear.appendChild(tooth);
        }
    });
});


// Efeito de glitch no logo
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (logo) {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% de chance
                logo.style.filter = 'drop-shadow(0 0 10px var(--color-brass)) hue-rotate(90deg)';
                
                setTimeout(() => {
                    logo.style.filter = 'drop-shadow(0 0 10px var(--color-brass))';
                }, 100);
            }
        }, 2000);
    }
});

// Efeito de partículas de dados
class DataParticles {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        
        this.init();
    }
    
    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.3';
        
        document.body.appendChild(this.canvas);
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        this.createParticles();
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        for (let i = 0; i < 30; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: 0,
                vy: -1,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                text: ['0', '1', 'T', 'E', 'C', 'N', 'O'][Math.floor(Math.random() * 7)]
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.y += particle.vy;
            
            if (particle.y < -10) {
                particle.y = this.canvas.height + 10;
                particle.x = Math.random() * this.canvas.width;
            }
            
            this.ctx.font = `${particle.size * 4}px monospace`;
            this.ctx.fillStyle = `rgba(205, 127, 50, ${particle.opacity})`;
            this.ctx.fillText(particle.text, particle.x, particle.y);
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Inicializar partículas de dados
document.addEventListener('DOMContentLoaded', () => {
    new DataParticles();
}); 

// --- Renderização dinâmica dos projetos do portfólio ---
function renderPortfolio(projetos) {
  const container = document.getElementById('portfolio-list');
  if (!container) return;
  container.innerHTML = '';
  projetos.forEach(proj => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.innerHTML = `
      <div class="portfolio-image">
        <div class="placeholder-image"></div>
      </div>
      <div class="portfolio-content">
        <h3>${proj.titulo}</h3>
        <p>${proj.descricao}</p>
        <ul>
          ${proj.stack.map(s => `<li><strong>${s.label}:</strong> ${s.valor}</li>`).join('')}
        </ul>
        <a href="${proj.link}" class="cta-button" style="margin-top:1rem;" target="_blank" rel="noopener noreferrer">Mais detalhes do projeto</a>
      </div>
    `;
    container.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('script/projetos.json')
    .then(res => res.json())
    .then(renderPortfolio)
    .catch(() => {});
}); 