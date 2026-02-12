// Navegação simples: destaca link ativo ao clicar
document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(document.querySelectorAll(".nav-link"));

  function setActive(hash) {
    links.forEach((link) => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      setActive(link.getAttribute("href"));
    });
  });

  // Define o primeiro link como ativo na carga inicial
  if (links.length > 0) {
    setActive(links[0].getAttribute("href"));
  }
});

