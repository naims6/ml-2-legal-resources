let menuBtn = document.getElementById("menuopen");
let menuIcon = document.querySelector(".menuopen i");
let mobileMenu = document.getElementById("mobile-menu");

console.log(menuIcon);
menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden", "opacity-0");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    mobileMenu.classList.add("hidden", "opacity-0");
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-times");
  }
});
