const stickyEl = document.querySelector('.header');
const sideNav = document.querySelector('.nav-side-bar');
const navItems = document.querySelector('.nav-items');
const navBars = document.querySelector('.toggle-navigation');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn'); 

window.addEventListener('load', () =>{
      AOS.init();
});

//Typing effect
document.addEventListener('DOMContentLoaded', () =>{
    var typed = new Typed(".element", {
    strings: ["Letting", "Managing properties", "Consultancy", "Buying and selling of properties"],
    smartBackspace:true,
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    loopCount:Infinity,
    smartDelay:1000
    })
});

//Add sticky navigation
window.addEventListener('scroll', () =>{ 

if(this.pageYOffset > 60){
stickyEl.classList.add('sticky')

} else{
    stickyEl.classList.remove('sticky')
}
});

//Change targeted link to active
navItems.addEventListener('click', e => {
    if(e.target.classList.contains('link-items') && !e.target.classList.contains('active')){
        navItems.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }
})

//Open navigation
openBtn.addEventListener('click', () =>{
sideNav.classList.add('show');
navBars.classList.add('hide');
});

//Close navigation
closeBtn.addEventListener('click', () =>{
sideNav.classList.remove('show');
navBars.classList.remove('hide');
});


//Close nav on the onclick of the nav item
document.addEventListener('click', e => {
    if(e.target.closest('.link-items')){
       sideNav.classList.remove('show'); 
       navBars.classList.remove('hide');
    }
});
