  /*STICKY HEADER */
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollButton');
    scroll.classList.toggle("active", window.scrollY > 50);
})

function scrollUp(){
    window.scrollTo({
        behavior:"smooth",
        top: 0
    });
};
  
  
  /*STICKY HEADER */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 );
});


    /*FADE-IN INTERSECTION OBSERVER */
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }   else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
});

/* IMAGE SLIDER */
$('.slide').hiSlide();

/* HEADER TOGGLE */
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}