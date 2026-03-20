document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Faz o quadro inclinar seguindo o mouse
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            // Deixa o fundo mais escuro/rosado quando o mouse mexe
            card.style.backgroundColor = "#ffe0f0"; 
        });

        card.addEventListener('mouseleave', () => {
            // Quando o mouse sai, ele volta ao normal (branco e reto)
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            card.style.backgroundColor = "#fff5f9";
            card.style.transition = "all 0.5s ease";
        });
    });
});
