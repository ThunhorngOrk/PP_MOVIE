

 // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Movie card hover effect enhancement
    document.addEventListener('DOMContentLoaded', function() {
        const movieCards = document.querySelectorAll('.movie-card');
        
        movieCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Add a subtle shadow and scale effect
                this.style.boxShadow = '0 20px 40px rgba(229, 9, 20, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                // Reset the shadow
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
            });
        });
        
        // Carousel auto-play with longer interval
        const myCarousel = document.getElementById('actionCarousel');
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 5000,
            wrap: true
        });
    });


    //   search modal  


    