'use strict';
const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function clean() {
    lostMole.textContent = 0;
    deadMole.textContent = 0;
}
for (let index = 1; index < 10; index++) {
    const hole = getHole(index);
    hole.onclick = function () {
        if (getHole(index).classList.contains('hole_has-mole')) {
            deadMole.textContent++;
        } else {
            lostMole.textContent++;
        }
        if (deadMole.textContent == 10) {
            clean();
            alert('Кроты подняли белый флаг, Вы выиграли!');
        } else if (lostMole.textContent == 5) {
            clean();
            alert('Кроты пошли в атаку, Вы проиграли!');
        }
    }
}