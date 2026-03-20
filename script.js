// Este código faz TODOS os cartões (cards) seguirem o mouse individualmente
document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".card, .cert-item"); // Seleciona todos os quadros
  
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    
    // Calcula a posição do mouse em relação ao centro do cartão atual
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    // Ajuste o número (20) para aumentar ou diminuir a inclinação
    const rotateX = -mouseY / 20; 
    const rotateY = mouseX / 20;

    // Aplica a rotação 3D
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});

// Faz os cartões voltarem ao normal (reto) quando o mouse sai da tela
document.addEventListener("mouseleave", () => {
  const cards = document.querySelectorAll(".card, .cert-item");
  cards.forEach(card => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
});
