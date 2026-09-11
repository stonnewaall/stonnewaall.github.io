const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "light") document.body.classList.add("light");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));
