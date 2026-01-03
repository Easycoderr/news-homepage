// toggle menu
const menuBntEl = document.getElementById("menuBtn");
const menuListEl = document.getElementById("menu-list");
menuBntEl.addEventListener("click", () => {
  const isOpen = menuBntEl.getAttribute("aria-expanded") === "true";
  menuBntEl.setAttribute("aria-expanded", String(!isOpen));
  menuListEl.setAttribute("aria-hidden", String(isOpen));
  menuListEl.classList.toggle("hidden");
  menuListEl.classList.toggle("flex");

  //   menuBntEl.setAttribute("src", "");
});
