const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn.querySelector("span");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    icon.textContent = "sunny";
  } else {
    icon.textContent = "bedtime";
  }
});
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  document.getElementById("closeMenu").style.display = "block";
});
document.getElementById("closeMenu").addEventListener("click", () => {
  navbar.classList.remove("active");
  document.getElementById("closeMenu").style.display = "none";
});
const colorBtn = document.getElementById("colorBtn");
const colorPanel = document.getElementById("colorPanel");
const colorOptions = document.querySelectorAll("#colorPanel .colors span");

colorBtn.addEventListener("click", () => {
  colorPanel.classList.toggle("active");

  if (colorPanel.classList.contains("active")) {
    colorBtn.style.display = "none"; 
  } else {
    colorBtn.style.display = "flex"; 
  }
});
var closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  colorPanel.classList.remove("active");
  colorBtn.style.display = "flex"; 
});
colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const newColor = option.getAttribute("data-color");
    document.documentElement.style.setProperty("--primary", newColor);
  });
});
