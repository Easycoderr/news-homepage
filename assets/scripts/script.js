// toggle menu
const menuBntEl = document.getElementById("menuBtn");
console.log(menuBntEl);
const menuListEl = document.getElementById("menu-list");
menuBntEl.addEventListener("click", () => {
  console.log("j");
  menuListEl.classList.toggle("hidden");
  menuListEl.classList.toggle("flex");
  //   menuBntEl.setAttribute("src", "");
});
