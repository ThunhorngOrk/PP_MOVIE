// Get the slider element
const slider = document.getElementById("slider");

// Function to scroll the slider
function scrollSlider(direction) {
  const scrollAmount = 300;
  slider.scrollLeft += direction * scrollAmount;
}

// Play button click
document.querySelector(".play-btn").addEventListener("click", () => {
  alert("Play Movie 🎬");
});

// Optional: Category button click (uncomment if needed)
// document.querySelectorAll(".category button").forEach(btn => {
//   btn.addEventListener("click", () => {
//     alert("Category: " + btn.innerText);
//   });
// });

// Movie card hover effect
document.addEventListener('DOMContentLoaded', () => {
  const movieCards = document.querySelectorAll('.card'); // Use '.card' since your HTML uses 'card' class

  movieCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 20px 40px rgba(229, 9, 20, 0.3)';
      card.style.transform = 'translateY(-10px) scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Initialize Bootstrap carousel if exists
  const myCarousel = document.getElementById('actionCarousel');
  if (myCarousel) {
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000,
      wrap: true
    });
  }
});
