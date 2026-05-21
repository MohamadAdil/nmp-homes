document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".SiteHeader");

  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }

    lastScroll = currentScroll;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
});