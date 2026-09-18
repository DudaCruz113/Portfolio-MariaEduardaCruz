// =========================================================
// Ano automático no rodapé
// =========================================================
document.getElementById("ano").textContent = new Date().getFullYear();

// =========================================================
// Menu mobile (abre/fecha os links de navegação)
// =========================================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("nav__links--aberto");
  navToggle.setAttribute("aria-expanded", aberto);
});

// Fecha o menu ao clicar em um link (útil no mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav__links--aberto");
  });
});

// =========================================================
// Revela seções suavemente ao rolar a página
// =========================================================
const alvosRevelados = document.querySelectorAll(
  ".sobre, .projetos, .habilidades, .contato"
);

alvosRevelados.forEach((el) => el.classList.add("reveal"));

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("is-visible");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

alvosRevelados.forEach((el) => observador.observe(el));