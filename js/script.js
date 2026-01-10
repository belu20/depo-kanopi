//aktifkan toggle
const navBar = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navBar.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const humburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navBar.contains(e.target)) {
    navBar.classList.remove("active");
  }
});
