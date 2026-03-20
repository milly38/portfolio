document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".card");
  
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição X dentro do card
    const y = e.clientY - rect.top;  // posição Y dentro do card
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});

// Reseta a posição quando o mouse sai da janela
document.addEventListener("mouseleave", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
});
