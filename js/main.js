let menuBtn = document.querySelectorAll('.menu-btn');
let menuBar = document.querySelector('.menu');
let body = document.querySelector('.body');
let success = document.querySelector('.success');
let messageForm = document.querySelector('.message__right');

let menuState = true;

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    success.style.transform = 'translate(-100%, -50%)';
})

menuBtn.forEach(item => {
    item.addEventListener('click', () => {
        if (menuState == false) {
            console.log('worked')
            menuBar.style.transform = 'translateY(-200%)';
        } else {
            menuBar.style.transform = 'translateY(0)';
        }
        menuState = !menuState;
    })
})


$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
  });