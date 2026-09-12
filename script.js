const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

const quoteCard = document.querySelector(".quote-card");
const quote = document.getElementById("rotatingQuote");
const attribution = document.getElementById("quoteAttribution");
const quotes = [
  { text: "“Live for more.”", source: "RED RISING", author: "PIERCE BROWN" },
  { text: "“The measure of a man is what he does when he has power.”", source: "RED RISING", author: "PIERCE BROWN" },
  { text: "“Per aspera ad astra.” — Through hardships to the stars.", source: "RED RISING", author: "PIERCE BROWN" },
  { text: "“Hic sunt leones.” — Here be lions.", source: "RED RISING", author: "PIERCE BROWN" },
  { text: "“Omnis vir lupus.” — Every man a wolf.", source: "RED RISING", author: "PIERCE BROWN" },
  { text: "“Break the chains.”", source: "RED RISING", author: "PIERCE BROWN" },
  { text: "“You are a helldiver, boyo.”", source: "RED RISING", author: "PIERCE BROWN" },
];

if (quoteCard && quote && attribution && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let quoteIndex = 0;
  window.setInterval(() => {
    quoteCard.classList.add("is-changing");
    window.setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      const nextQuote = quotes[quoteIndex];
      quote.textContent = nextQuote.text;
      attribution.innerHTML = `${nextQuote.source}<br><span>${nextQuote.author}</span>`;
      quoteCard.classList.remove("is-changing");
    }, 220);
  }, 6500);
}
