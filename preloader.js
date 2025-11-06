window.addEventListener("load", () => {
      const preloader = document.getElementById("preloader");
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
      setTimeout(() => preloader.style.display = "none", 100);

      // Auto-open popup after 3s
      setTimeout(openPopup, 3000);
    });