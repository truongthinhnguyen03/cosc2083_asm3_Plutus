ScrollReveal({
    reset:false,
    duration: 1500,
});

ScrollReveal().reveal('.heading', { 
    delay: 300,
    origin: 'bottom',
    distance: '10rem',
});

ScrollReveal().reveal('.image', {
    delay: 1000,
    origin: window.innerWidth > 768 ? "left" : "bottom",
    distance: '10rem',
});

ScrollReveal().reveal('.paragraph', { 
    delay: 1200,
    origin: window.innerWidth > 768 ? "right" : "bottom",
    distance: '10rem',
});
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });