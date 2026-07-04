(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const backTop = document.querySelector(".back-top");

  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle("scrolled", y > 12);
    backTop?.classList.toggle("visible", y > 500);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle?.addEventListener("click", () => {
    nav?.classList.toggle("open");
    toggle.classList.toggle("active");
  });

  document.querySelectorAll(".nav > li").forEach((item) => {
    const link = item.querySelector(":scope > a");
    const dropdown = item.querySelector(".dropdown");
    if (!dropdown || !link) return;

    link.addEventListener("click", (e) => {
      if (window.innerWidth > 900) return;
      e.preventDefault();
      item.classList.toggle("open");
    });
  });

  document.querySelectorAll(".reveal").forEach((el) => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
  });

  backTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
