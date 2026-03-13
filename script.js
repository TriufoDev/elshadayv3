/* ==================== HEADER COM SCROLL ==================== */
const header = document.getElementById('header');

function handleScroll() {
    if (window.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

/* ==================== ANIMAÇÃO DE SCROLL (REVEAL) ==================== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Opcional: para a animação acontecer só uma vez
        }
    });
}, {
    threshold: 0.15 // A animação começa quando 15% do elemento está visível
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
