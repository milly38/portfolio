// Seleciona TODOS os elementos com a classe 'card'
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    
    // Calcula a posição do mouse relativa ao centro do card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calcula os ângulos de rotação (ajuste o 15 para mais ou menos inclinação)
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    // Aplica a transformação
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  // Volta ao normal quando o mouse sai
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = "transform 0.5s ease";
  });

  // Remove a transição suave durante o movimento para não ficar "atrasado"
  card.addEventListener('mouseenter', () => {
    card.style.transition = "transform 0.1s ease-out";
  });
});
