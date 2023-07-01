const navLinks = document.querySelectorAll(".navbar .nav-link"),
  navBar = document.getElementById("navbar-example2");
(window.onscroll = () => {
  window.scrollY < 200
    ? ((navBar.style.opacity = "1"),
      (navBar.style.backgroundColor = "transparent"),
      (navBar.style.boxShadow = "unset"),
      (document.getElementById("nav-brand").style.color = "#fff"),
      navLinks.forEach((a) => {
        a.classList.remove("nav-black");
      }))
    : window.scrollY <= 300
    ? (navBar.style.opacity = "0")
    : 600 <= window.scrollY &&
      ((navBar.style.opacity = "1"),
      (navBar.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 30px 50px"),
      (navBar.style.backgroundColor = "#fff"),
      (navBar.style.padding = "15px 0 15px"),
      (document.getElementById("nav-brand").style.color = "black"),
      navLinks.forEach((a) => {
        a.classList.add("nav-black");
      }));
}),
  console.log(window.scrollY);
var typed = new Typed(".typed", {
  strings: ["Larry Daniels", "Designer", "Developer"],
  typeSpeed: 70,
  startDelay: 20,
  backSpeed: 40,
  loop: !0,
});
