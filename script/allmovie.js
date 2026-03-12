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

function scrollSlider(direction) {
  if (!slider) return;
  slider.scrollLeft += direction * 300;
}

/* ===============================
   SEARCH FUNCTION
=============================== */
function searchPage() {
  const input = document.getElementById("search").value.toLowerCase();

  if (input.includes("anime")) {
    location.href = "../Allmovie/allanime.html";
  }
  else if (input.includes("horror")) {
    location.href = "../Allmovie/allhorror.html";
  }
  else if (input.includes("action")) {
    location.href = "../Allmovie/allaction.html";
  }
  else if (input.includes("drama")) {
    location.href = "../Allmovie/alldrama.html";
  }
  else if (input.includes("history")) {
    location.href = "../Allmovie/allhistory.html";
  }
  else {
    alert("Page not found");
  }
}
