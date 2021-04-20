'use strict';
const timer = document.getElementById('timer');
let count = timer.textContent;
const countDown = function () {
    if (count === 0) {
        alert("Вы выиграли в конкурсе!");
        location = 'https://www.fok-oka.ru/img/news/587.jpg';
        clearInterval(timerId);
    } else {
        count--;
        timer.textContent = `00:00:${count >= 10 ? count : "0" + count}`;
    }
};
const timerId = setInterval(countDown, 1000);