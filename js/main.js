// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
const appointmentForm = document.getElementById('appointment-form');

appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        datetime: document.getElementById('datetime').value
    };

    // Here you would typically send this data to your backend
    console.log('Appointment Request:', formData);
    
    // Show success message
    alert('Thank you for booking! We will contact you shortly to confirm your appointment.');
    appointmentForm.reset();
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'var(--light-bg)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'var(--light-bg)';
        navbar.style.boxShadow = 'none';
    }
});
