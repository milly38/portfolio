document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Inclinação 3D
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            
            // EFEITO ESCURECER: Muda o fundo para um rosa mais profundo no hover
            card.style.backgroundColor = "#ffd1e8"; 
            card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
        });

        card.addEventListener('mouseleave', () => {
            // Volta ao normal suavemente
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            card.style.backgroundColor = "#ffffff"; // Volta para o branco original
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
            card.style.transition = "all 0.5s ease";
        });
    });

    // Efeito Parallax nos emojis do topo
    window.addEventListener('mousemove', (e) => {
        const items = document.querySelectorAll('.float-item');
        items.forEach((item, index) => {
            const speed = (index + 1) * 0.05;
            const x = (window.innerWidth / 2 - e.pageX) * speed;
            const y = (window.innerHeight / 2 - e.pageY) * speed;
            item.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
});
