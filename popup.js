const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

function openPopup() { popup.style.display = "flex"; }
function closePopup() { popup.style.display = "none"; }

document.getElementById("openPopupBtn").addEventListener("click", openPopup);
document.getElementById("openPopupBtnMobile").addEventListener("click", openPopup);
document.getElementById("heroPopupBtn").addEventListener("click", openPopup);
closePopupBtn.addEventListener("click", closePopup);
popup.addEventListener("click", (e) => { if(e.target === popup) closePopup(); });