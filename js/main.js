document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('m-0');
            nav.classList.remove('m-3');
            nav.style.borderRadius = '0';
        } else {
            nav.classList.remove('m-0');
            nav.classList.add('m-3');
            nav.style.borderRadius = '15px';
        }
    });

});
