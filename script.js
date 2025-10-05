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

  const menuToggle = document.getElementById("menu-toggle");

  const menuMobile = document.getElementById("menu-mobile");

  if (menuToggle && menuMobile) {
    menuToggle.addEventListener("click", () => {

      menuMobile.classList.toggle("menu-aberto");

      menuToggle.classList.toggle("menu-aberto");

      const isExpanded = menuToggle.classList.contains("menu-aberto");
      menuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  const menuIcon = document.querySelector(".menu-icon");

  const mainNav = document.querySelector(".main-nav");

  if (menuIcon && mainNav) {
    menuIcon.addEventListener("click", () => {

      mainNav.classList.toggle("open");

      if (mainNav.classList.contains("open")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
      } else {

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    });
  }
});
