/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});

/* ================= SCROLL ANIMATION ================= */
const revealElements = document.querySelectorAll(
  ".service-card, .filter-tags span, .hero-content"
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================= FILTER INTERACTION ================= */
const filters = document.querySelectorAll(".filter-tags span");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
  });
});

/* ================= CURSOR GLOW EFFECT ================= */
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* ================= BUTTON RIPPLE ================= */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    ripple.style.left = e.offsetX + "px";
    ripple.style.top = e.offsetY + "px";

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});
