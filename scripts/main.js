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

ScrollReveal().reveal('.inicio-contenido,.imagen,.contendor-imagenes', { origin: 'top' });
ScrollReveal().reveal('.card', { origin: 'bottom' });
ScrollReveal().reveal('.contacto ,.container-text2,.container-text', { origin: 'left' });




/* Multiples textos*/

const typed = new Typed('.multiples-textos',{
    strings: ['Cortes de calida','Servicio excelente','Diferenciacion'],
    typeSpeed: 100,
    backSpeed: 100,
    delaySpeed: 1000,
    loop:true
});
