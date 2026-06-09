const menuBtn = document.getElementById("menuBtn");
const mobilePanel = document.getElementById("mobilePanel");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobilePanel.classList.toggle("open");
});

document.querySelectorAll(".mobile-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    mobilePanel.classList.remove("open");
  });
});