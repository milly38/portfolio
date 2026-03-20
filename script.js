document.addEventListener("mousemove", (e) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) - rect.width / 2;
    const y = (e.clientY - rect.top) - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
  });
});

document.addEventListener("mouseleave", () => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
});
