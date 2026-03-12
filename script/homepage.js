// PLAY BUTTON
document.querySelector(".play-btn")?.addEventListener("click", () => {
  alert("Play Movie 🎬");
});

// WAIT FOR PAGE LOAD
document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     MOVIE CARD HOVER EFFECT
  =============================== */
  const movieCards = document.querySelectorAll(".card");

  movieCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 20px 40px rgba(255, 255, 255, 0.3)";
      card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.5)";
      card.style.transform = "scale(1)";
    });
  });

  /* ===============================
     BOOTSTRAP CAROUSEL (SAFE)
  =============================== */
  const myCarousel = document.getElementById("actionCarousel");

  if (myCarousel && window.bootstrap) {
    new bootstrap.Carousel(myCarousel, {
      interval: 5000,
      wrap: true
    });
  }

  /* ===============================
     SEARCH ENTER KEY
  =============================== */
  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchPage();
      }
    });
  }
});

/* ===============================
   SLIDER SCROLL
=============================== */
const slider = document.getElementById("slider");

function searchPage() {
  const input = document.getElementById("search").value.toLowerCase().trim();

  if (input.includes("anime")) location.href = "Home/Anime.html";
  else if (input.includes("horror")) location.href = "Home/Horror.html";
  else if (input.includes("action")) location.href = "Home/Action.html";
  else if (input.includes("drama")) location.href = "Home/Drama.html";
  else if (input.includes("history")) location.href = "Home/History.html";
  else alert("Movie category not found");
}