document.querySelectorAll(".quote-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("popup").style.display = "flex";
  });
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
let slideWidth;
let slidesToShow;

// Function to update slidesToShow based on screen width
function updateSettings() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 992) {
    slidesToShow = 4; // Desktop
  } else if (screenWidth >= 768) {
    slidesToShow = 2; // Tablet
  } else {
    slidesToShow = 1; // Mobile
  }
  slideWidth = 100 / slidesToShow;
  slides.forEach(slide => slide.style.minWidth = `${slideWidth}%`);
  moveCarousel();
}

// Move Carousel
function moveCarousel() {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(${-index * slideWidth}%)`;
}

// Next Button
nextBtn.addEventListener('click', () => {
  index++;
  if (index > slides.length - slidesToShow) index = 0; // Loop continuously
  moveCarousel();
});

// Prev Button
prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) index = slides.length - slidesToShow; // Loop continuously
  moveCarousel();
});

// Autoplay (fixed)
setInterval(() => {
  index++;
  if (index > slides.length - slidesToShow) {
    index = 0;
  }
  moveCarousel();
}, 3000);

// Run once on load + on resize
updateSettings();
window.addEventListener('resize', updateSettings);
