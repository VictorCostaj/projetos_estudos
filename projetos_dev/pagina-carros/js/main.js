const search = document.querySelector(".search-box");
const menu = document.querySelector(".navbar");
const header = document.querySelector("header");

function toggleSearch() {
  search.classList.toggle("active");
  menu.classList.remove("active");
}

function toggleMenu() {
  menu.classList.toggle("active");
  search.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#menu-icon").addEventListener("click", toggleMenu);
});

function toggleHeader() {
  header.classList.toggle("shadow", window.scrollY > 0);
}

document.querySelector("#search-icon").addEventListener("click", toggleSearch);
document.querySelector("#menu-icon").addEventListener("click", toggleMenu);
window.addEventListener("scroll", toggleHeader);

window.onscroll = () => {
  menu.classList.toggle("active");
  search.classList.remove("active");
};
