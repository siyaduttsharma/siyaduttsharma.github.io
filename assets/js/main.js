// assets/js/main.js
function toggleCloud(button) {
    // Remove active class from all buttons
    document.querySelectorAll('.cloud-button').forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    
    // Toggle active class on clicked button
    button.classList.toggle('active');
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to post cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.post-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});