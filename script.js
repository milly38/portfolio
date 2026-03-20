// Aguarda a página carregar completamente antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {

    // ===== EFEITO 3D NOS CARDS =====
    const cards = document.querySelectorAll('.card, .cert-item, .blog-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            const scale = 1.05;

            card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = "transform 0.1s ease-out";
        });
    });

    // ===== SCROLL REVEAL ANIMATION (ANIMAÇÃO AO DESCER A PÁGINA) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona as seções para animar
    document.querySelectorAll('section, .card').forEach(el => {
        el.style.opacity = '0'; // Começa invisível para o efeito funcionar
        observer.observe(el);
    });

    // ===== NAVEGAÇÃO SUAVE =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ===== PARALLAX NOS ITENS FLUTUANTES (SE EXISTIREM) =====
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        document.querySelectorAll('.float-item').forEach((item, index) => {
            const speed = (index + 1) * 0.5;
            const xPos = (window.innerWidth / 2 - x) * speed * 0.01;
            const yPos = (window.innerHeight / 2 - y) * speed * 0.01;
            item.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });

    // ===== PARALLAX NO HERO (OPCIONAL) =====
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('header'); // Alterei para header para garantir
        if (hero) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
});

// ===== ESTILOS DE ANIMAÇÃO NO HEAD =====
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    @keyframes slideUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .card, section { will-change: transform, opacity; }
`;
document.head.appendChild(styleSheet);
