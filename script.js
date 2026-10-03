// Smooth Scrolling engine for Portfolio Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetTarget = document.querySelector(this.getAttribute('href'));
        
        if (targetTarget) {
            targetTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 