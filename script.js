(() => {
  const slides = Array.from(document.querySelectorAll(".skills-slide"));
  const count = document.getElementById("slideCount");
  const previous = document.getElementById("previousSlide");
  const next = document.getElementById("nextSlide");
  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.hidden = !active;
      slide.classList.toggle("is-active", active);
    });
    count.textContent = `${current + 1} / ${slides.length}`;
  }

  previous.addEventListener("click", () => showSlide(current - 1));
  next.addEventListener("click", () => showSlide(current + 1));

  // Keyboard support while the carousel is focused.
  document.querySelector(".skills-carousel").addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") showSlide(current - 1);
    if (event.key === "ArrowDown") showSlide(current + 1);
  });
  showSlide(0);
})();
