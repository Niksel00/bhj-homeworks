'use strict';
const fontSize = Array.from(document.querySelectorAll('.book__control_font-size .font-size'));
const textColor = Array.from(document.querySelectorAll('.book__control_color .color'));
const backgroundColor = Array.from(document.querySelectorAll('.book__control_background .color'));
const book = document.querySelector('.book');

function changeClass(elements, el, ClassName) {
    elements.forEach((event) => event.classList.remove(ClassName));
    el.classList.add(ClassName);
}
fontSize.forEach((e) => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        changeClass(fontSize, e.target, 'font-size_active');
        changeFontSize(e.target);
    });
});

function changeFontSize(el) {
    let fSize = el.dataset.size;
    if (fSize == 'small') {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    }
    else if (fSize == 'big') {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    }
    else {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }
}