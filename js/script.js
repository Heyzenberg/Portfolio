// CONTROL PANEL

let marker = document.querySelector('#marker');
let list = document.querySelectorAll('ul li');

function moveIndicator(e) {
    marker.style.top = e.offsetTop + 'px';
    marker.style.height = e.offsetHeight + 'px';

}
list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        moveIndicator(e.target);
    })
})

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('mouseover', activeLink));

// CONTROL PANEL Mobile

let markerMobile = document.querySelector('#markerMobile');

function moveIndicatorMobile(e) {
    markerMobile.style.left = e.offsetLeft + 'px';
    markerMobile.style.width = e.offsetWidth + 'px';

}
list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        moveIndicatorMobile(e.target);
    })
})

function activeLinkMobile() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('mouseover', activeLinkMobile));

// DARK / WHITE THEME

const body = document.querySelector('body');
const switchTheme = document.getElementById('switchTheme');

switchTheme.onclick = function () {
    switchTheme.classList.toggle('active');
    body.classList.toggle('active');
}

// WINDOW - "ABOUT ME"

const openModal = document.querySelectorAll('.about__btn');
const modalWrapper = document.querySelector('.modal_wrapper');
const modalWindow = document.querySelector('.modal_window');
const closeModal = document.querySelector('.close_modal');

openModal.forEach ((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        modalWrapper.classList.add('open');
        modalWindow.classList.add('open');
        body.classList.add('lock');
    })
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalWrapper.classList.remove('open');
    modalWindow.classList.remove('open');
    body.classList.remove ('lock');
})

document.addEventListener('click', (e) => {
    if(e.target === modalWrapper) {
        modalWrapper.classList.remove('open');
        modalWindow.classList.remove('open');
    }
})

// Anima Scroll

const animaItems = document.querySelectorAll('.anima-scroll');

if(animaItems.length > 0) {
    window.addEventListener('scroll', animaOnScroll);
    function animaOnScroll(params) {
        for(let i=0; i < animaItems.length; i++) {
            const animaItem = animaItems[i];
            const animaItemHeight = animaItem.offsetHeight;
            const animaItemOffset = offset(animaItem).top;
            const animaStart = 4;

            let animaItemPoint = window.innerHeight - animaItemHeight / animaStart;
            if(animaItemHeight > window.innerHeight) {
                animaItemPoint = window.innerHeight - window.innerHeight / animaStart;
            }

            if((pageYOffset > animaItemOffset - animaItemPoint) && pageYOffset < (animaItemOffset + animaItemHeight)) {
                animaItem.classList.add('anima-start');
            }
            else{
                if(!animaItem.classList.contains('anima-hold')) {
                    animaItem.classList.remove('anima-start');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
}
setTimeout(() => {
    animaOnScroll();
}, 400)
