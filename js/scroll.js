ScrollReveal({
    reset:true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.header_elm, .center_header', { 
    delay: 300,
    origin: 'bottom'
});

ScrollReveal().reveal('.scroll_img', {
    delay: 400,
    origin: 'left'
});

ScrollReveal().reveal('.text_elm, .center_text', { 
    delay: 800,
    origin: 'right'
});

ScrollReveal().reveal('.button_container', { 
    delay: 600
});
