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

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(254, 254, 254, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#FEFEFE';
        header.style.backdropFilter = 'none';
    }
});

    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-links a');
    // Create overlay if not present
    let overlay = document.querySelector('.mobile-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        document.body.appendChild(overlay);
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navWrapper.classList.remove('active');
        overlay.classList.remove('active');
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navWrapper.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    navWrapper.addEventListener('click', function(e) {
        // Only trigger if nav-wrapper itself is clicked, not its children
        if (e.target === navWrapper && navWrapper.classList.contains('active')) {
            navWrapper.classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
            document.querySelector('.mobile-overlay').classList.remove('active');
        }
    });
});

