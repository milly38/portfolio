document.addEventListener("DOMContentLoaded", () => {
    // 1. EFEITO 3D NOS CARDS
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Aumentei a divisão para 20 para o movimento ficar mais elegante
            const rotateX = (y - centerY) / 20; 
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.transition = "transform 0.05s ease-out"; // Movimento quase instantâneo
        });

        card.addEventListener('mouseleave', () => {
            // Volta para o lugar de forma suave
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
        });
    });

    // 2. EFEITO PARALLAX NOS EMOJIS (FLOAT-ITEMS)
    window.addEventListener('mousemove', (e) => {
        const floatItems = document.querySelectorAll('.float-item');
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        floatItems.forEach((item, index) => {
            const speed = (index + 1) * 0.03;
            const x = (window.innerWidth / 2 - mouseX) * speed;
            const y = (window.innerHeight / 2 - mouseY) * speed;
            item.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.05}deg)`;
        });
    });
});
