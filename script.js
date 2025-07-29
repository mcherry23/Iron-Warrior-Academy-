document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active'); // Toggles the 'active' class on the nav links
            navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active')); // For accessibility
        });

        // Optional: Close nav when a link is clicked (useful for single-page sites or if you want it to collapse)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }
});
