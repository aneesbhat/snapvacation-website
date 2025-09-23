const offcanvas = document.getElementById("offcanvas");
document.getElementById("openCanvasBtn").addEventListener("click", () => offcanvas.classList.add("active"));
document.getElementById("closeCanvasBtn").addEventListener("click", () => offcanvas.classList.remove("active"));