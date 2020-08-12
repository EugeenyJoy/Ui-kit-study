let subMenu1 = document.querySelector('.sub_menu1');
let btnMenu1 = document.querySelector('.humb_btn1');
let subMenu2 = document.querySelector('.sub_menu2');
let btnMenu2 = document.querySelector('.humb_btn2');

subMenu1.style.display = "none"
subMenu2.style.display = "none"
btnMenu1.addEventListener('click', () => {
    if (subMenu1.style.display == "none") {
        subMenu1.style.display = "block";
    } else {subMenu1.style.display = "none";}
});

btnMenu2.addEventListener('click', () => {
    if (subMenu2.style.display == "none") {
        subMenu2.style.display = "block";
    } else {subMenu2.style.display = "none";}
});

