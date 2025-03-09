// Add animation classes to project cards as they come into view
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.group');
    
    // Add project-card class for animations
    projectCards.forEach(card => {
        card.classList.add('project-card');
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all project cards
    projectCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});

// Smooth scroll for navigation links
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