// Preloader control with fixed timeout for UX + SEO friendly behavior
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Minimum visible time for loader (in ms)
  const minVisibleTime = 1500;

  // Start timer when page starts loading
  const start = performance.now();

  const hidePreloader = () => {
    const elapsed = performance.now() - start;
    const remaining = Math.max(minVisibleTime - elapsed, 0);

    setTimeout(() => {
      preloader.style.display = "none";
      document.body.style.overflow = "auto"; // restore scroll
    }, remaining);
  };

  hidePreloader();
});
