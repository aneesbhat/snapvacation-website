const reviewTrack = document.querySelector(".reviews-track");
const reviewSlides = document.querySelectorAll(".review-card");

let reviewIndex = 0;
const reviewIntervalTime = 3000; // 3 seconds

function showReviewSlide() {
  const slideWidth = reviewSlides[0].offsetWidth;
  reviewTrack.style.transform = `translateX(-${reviewIndex * slideWidth}px)`;
  reviewTrack.style.transition = "transform 0.6s ease-in-out";
}

function autoPlayReviews() {
  reviewIndex++;
  if (reviewIndex >= reviewSlides.length) {
    reviewIndex = 0;
  }
  showReviewSlide();
}

setInterval(autoPlayReviews, reviewIntervalTime);
