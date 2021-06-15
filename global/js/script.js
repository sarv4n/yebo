"use strict"
// NAVIGATION

let slidesTrack = document.querySelector('.slides__track');
let navBtns = document.querySelectorAll('.nav__dot-btn');
let navBtnArray = [];

let currentNavBtn;
for(let i = 0;i < navBtns.length;i++){
    navBtnArray.push(navBtns[i]);
    navBtns[i].onclick = () => navBtnClick(navBtnArray[i]);
}
let hireUsBtn = document.body.querySelector('.hire-us-btn');
let previousNavBtn = navBtnArray[0];
navBtnClick(navBtnArray[0]);
// NAVIGATION

//menu
let menuItems = document.body.querySelectorAll('.menu__item');
let menuCont = document.body.querySelector('.menu__container');
let btnClose = document.body.querySelector('.burger_close');
let btnOpen = document.body.querySelector('.burger_open');
for(let i = 0; i < menuItems.length; i++){
    menuItems[i].onclick = function(){
        menuItemsClick(menuItems[i]);
        navBtnClick(navBtnArray[i]);
    }
}

function menuItemsClick(item){
    if(menuItems){
        item.classList.add('menu__item-act');
        burgerBtnToClose();
        for(let i of menuItems){
            if(i !== item){
                i.classList.remove('menu__item-act');
            }
            
        }
        
    }
}
//menu


//slide 1
let blogItems = document.body.querySelectorAll('.blogs__item');
let previousItem;
for(let item of blogItems){
    item.onclick = function(){
        item.classList.add('blogs__item-active');
        if(previousItem){
            previousItem.classList.remove('blogs__item-active');
        }   
        previousItem = item;
    }
}
//slide 1
//slide 2

let carouselArray = document.body.querySelectorAll('.carousel__item');
let carouselCurrentItem = 0;
let carouselTrack = document.body.querySelector('.carousel__track');
let carouselArrowLeft = document.body.querySelector('.arrow__left'); 
let carouselArrowRight = document.body.querySelector('.arrow__right'); 

if(carouselArray[1]){
    carouselArray[1].classList.add('item_selected');
}
//slide 2
//slide 5
let services = document.body.querySelectorAll('.services_item');
if(services){
    for(let service of services){
        service.onclick = () =>  checkMarks(service);
    }
}
//slide 5

// Functions

function navBtnClick(navBtn) {
    currentNavBtn = navBtn;
    if(navBtn != navBtnArray[0]){
        hireUsBtn.style.bottom = '0px';
    }else {
        hireUsBtn.style.bottom = '-25vh';
    }
    console.log(currentNavBtn)
    navBtn.classList.add('btn-active');
    slidesTrack.style.top = `${navBtnArray.indexOf(navBtn) * (-100)}%`;
    if(currentNavBtn !== previousNavBtn){
        previousNavBtn.classList.remove('btn-active');
        previousNavBtn = navBtn;
    }
    

}



function carouselNext(){

    if(carouselCurrentItem !== carouselArray.length - 2){
        carouselCurrentItem += 1;
        carouselTrack.style.right = `${carouselCurrentItem * 26.2742}%`;
        carouselArray[carouselCurrentItem + 1].classList.add('item_selected');
        carouselArray[carouselCurrentItem].classList.remove('item_selected');
        carouselArrowLeft.classList.remove('arrow__blind');
    }
    if(carouselCurrentItem == carouselArray.length - 2){
        carouselArrowRight.classList.add('arrow__blind');
    
    }
    
}

function carouselPrevious(){

    if(carouselCurrentItem !== -1){
        carouselCurrentItem -= 1;
        carouselTrack.style.right = `${carouselCurrentItem * 26.2742}%`;
        carouselArray[carouselCurrentItem + 1].classList.add('item_selected');
        carouselArray[carouselCurrentItem + 2].classList.remove('item_selected');
        carouselArrowRight.classList.remove('arrow__blind');
    }

    if(carouselCurrentItem == -1){
        carouselArrowLeft.classList.add('arrow__blind');
    }

}

function checkMarks(service){
    if(services)[
        service.classList.toggle('services_item-selected')
    ]
}

function burgerBtnToClose(){
    menuCont.classList.remove('menu__activated');
    // btnOpen.style.opacity = '0';
    btnClose.classList.remove('burger_close-active')
}
function burgerBtnToOpen(){
    btnClose.classList.add('burger_close-active');
    // btnOpen.style.opacity = '1';
    menuCont.classList.add('menu__activated')
}
  // Functions