const hamburger = document.querySelector(".hamburger")
// const links = document.querySelector(".links")
// const navButtons = document.querySelector(".nav-buttons")
const mobileNav = document.getElementById("nav-mobile")

hamburger.addEventListener("click", () => {
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden")
    mobileNav.classList.add("flex")
  } else {
    mobileNav.classList.add("hidden")
    mobileNav.classList.remove("flex")
  }
})
