  document.addEventListener('DOMContentLoaded', () => {
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
    
// Gallery filter functionality
const galleryButtons = document.querySelectorAll('.gallery-nav button');
galleryButtons.forEach(button => {
    button.addEventListener('click', function() {
        galleryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
});

});

