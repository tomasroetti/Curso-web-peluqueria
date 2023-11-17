/* Navbar*/ 
const toggle = document.querySelector('.toggle')
const links = document.querySelector('.links')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
})

/*navbar Scroll
*/ 
var navbar = document.getElementById("navbar");

window.onscroll = function() {
    var scrollPosition = window.pageYOffset;

    navbar.style.top = scrollPosition + "px";
};



/*Revela mientreas se Scrollea*/ 
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200,

});

ScrollReveal().reveal('inicio-contenido, .imagen ', { origin: 'top' });
ScrollReveal().reveal('.contenido-banner , .portafolio-box , contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.datos-contenido h1,  ', { origin: 'left' });
ScrollReveal().reveal('.datos-contenido p,  ', { origin: 'right' });