document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu button and nav element
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        // Toggle between menu and close icons
        const isOpen = nav.classList.contains('active');
        mobileMenuBtn.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileMenuBtn.innerHTML = '☰';
        }
    });

    // Close menu when clicking a link (for mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            }
        });
    });
});
