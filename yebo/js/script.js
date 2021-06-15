'use strict'
let body = document.body;
let btnsArray = body.querySelectorAll('.btns__item');
let commentsArray = body.querySelectorAll('.comment');
let commentsTrack = body.querySelector('.comments__track');
let previousBtn = btnsArray[0];
for(let n = 0;n < btnsArray.length;n++){
    btnsArray[n].onclick = function(){
        commentsTrack.style.right = `${n * 100}%`;

        btnsArray[n].classList.add('btn__active');
        if(btnsArray[n] !== previousBtn){
            previousBtn.classList.remove('btn__active')
        }
        
        previousBtn = btnsArray[n];        
    }
}
btnsArray[0].classList.add('btn__active');
//menu

let menuBtn = body.querySelector('.menu-btn');
let menu = body.querySelector('.nav__block');

menuBtn.onclick = () => {
    menu.classList.toggle('nav__block-open');
    menuBtn.classList.toggle('menu-btn__active');
}

//menu