const revealItems = document.querySelectorAll(
  ".service-card, .filter-tags span, .hero-content"
);

const revealOnScroll = () => {
  revealItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      item.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const filters = document.querySelectorAll(".filter-tags span");
filters.forEach(tag => {
  tag.addEventListener("click", () => {
    filters.forEach(t => t.classList.remove("active"));
    tag.classList.add("active");
  });
});
