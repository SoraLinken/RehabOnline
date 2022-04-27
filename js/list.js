/* --- js - location ---*/
const addBtn = document.getElementById("add-btn")

addBtn.addEventListener('click', function visitPage() {
    window.location = './form.html';
})

/* --- js - resizeIcons ---*/
var topBtn = document.querySelectorAll('.btn');

const resizeIcons = () => {
    makeSmall()
}
window.onload = resizeIcons;

window.onresize = resizeIcons;

function makeSmall() {
    if (window.innerWidth <= 500) topBtn.forEach(function (e) { e.classList.add('btn-sm') });
    else topBtn.forEach(function (e) { e.classList.remove('btn-sm') });
};

