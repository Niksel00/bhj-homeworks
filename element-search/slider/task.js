const sliders = document.querySelectorAll('.slider__item'),
    prev = document.querySelector('.slider__arrow_prev'),
    next = document.querySelector('.slider__arrow_next'),
    dots = document.querySelectorAll('.slider__dot');
let slideActive = 0;

prev.onclick = () => {
    changeActive(); 
    slideActive--;
    if (slideActive < 0) { 
        slideActive = sliders.length - 1;
    }
    changeActive();
}

next.onclick = () => {
    changeActive();
    slideActive++; 
    if (slideActive >= sliders.length) {
        slideActive = 0;
    }
    changeActive();
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        changeActive();
        slideActive = i;
        changeActive();
    }
}

function changeActive() {
    if (sliders[slideActive].classList.contains('slider__item_active')) {
        sliders[slideActive].classList.remove('slider__item_active');
        dots[slideActive].classList.remove('slider__dot_active');
    }
    else {
        sliders[slideActive].classList.add('slider__item_active');
        dots[slideActive].classList.add('slider__dot_active');
    }
}
