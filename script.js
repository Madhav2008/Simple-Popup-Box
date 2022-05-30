let toogleBtn = document.querySelector('.toogleBtn');
let container = document.querySelector('.container');

toogleBtn.onClick = function () {
    container.classList.toogle('active');
}