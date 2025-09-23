document.addEventListener("DOMContentLoaded", () => {
    const thumbnail = document.getElementById("video-thumbnail");
    const iframeWrapper = document.getElementById("video-iframe");
    const iframe = iframeWrapper.querySelector("iframe");

    thumbnail.addEventListener("click", () => {
      // Autoplay video by appending autoplay=1
      const src = iframe.getAttribute("src");
      if (!src.includes("autoplay=1")) {
        iframe.setAttribute("src", src + (src.includes("?") ? "&" : "?") + "autoplay=1");
      }

      // Hide thumbnail & show iframe
      thumbnail.style.display = "none";
      iframeWrapper.style.display = "block";
    });
  });