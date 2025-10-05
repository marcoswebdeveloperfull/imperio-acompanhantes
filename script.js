document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionContent =
        accordionItem.querySelector(".accordion-content");

      header.classList.toggle("active");

      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
        accordionContent.style.padding = "0 20px";
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionContent.style.padding = "15px 20px";
      }
    });
  });

  const favoriteIcons = document.querySelectorAll(".favorite-icon");
  const favoritesCountSpan = document.querySelector(".favorites-count");
  let favoritesCount = 0;

  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (icon.classList.contains("fas")) {
        favoritesCount++;
      } else {
        favoritesCount--;
      }
      favoritesCountSpan.textContent = favoritesCount;
    });
  });
  // Seleciona o botão de hambúrguer/toggle pelo ID CORRETO: "menu-toggle"
  const menuToggle = document.getElementById("menu-toggle");
  // Seleciona a lista de links pelo ID
  const menuMobile = document.getElementById("menu-mobile");

  // Verifica se o elemento foi encontrado antes de adicionar o listener
  if (menuToggle && menuMobile) {
    menuToggle.addEventListener("click", () => {
      // 1. Alterna a classe 'menu-aberto' na lista de links para mostrar/esconder o menu (via CSS)
      menuMobile.classList.toggle("menu-aberto");

      // 2. Alterna a classe 'menu-aberto' no próprio botão (para troca de ícone via CSS)
      menuToggle.classList.toggle("menu-aberto");

      // 3. Atualiza o atributo ARIA para acessibilidade
      const isExpanded = menuToggle.classList.contains("menu-aberto");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  // --- LÓGICA DO MENU HAMBÚRGUER ---
  // Seleciona o ícone de hambúrguer pela classe
  const menuIcon = document.querySelector(".menu-icon");
  // Seleciona o menu de navegação principal pela classe
  const mainNav = document.querySelector(".main-nav");

  // Verifica se os elementos existem na página (para não dar erro nas páginas que não têm)
  if (menuIcon && mainNav) {
    menuIcon.addEventListener("click", () => {
      // 1. Alterna a classe 'open' no menu principal (para exibir/esconder via CSS)
      mainNav.classList.toggle("open");

      // 2. Lógica de troca de ícone (bars ☰ para close X)
      if (mainNav.classList.contains("open")) {
        // Se o menu abriu, troca o ícone de bars (☰) para times (X)
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times"); // fa-times é o ícone 'X' do Font Awesome
      } else {
        // Se o menu fechou, troca o ícone de volta para bars (☰)
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    });
  }
});
