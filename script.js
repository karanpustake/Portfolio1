
console.log("Hello");
// let primarynav = document.querySelector('.navbartop a') 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbartop')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active')
}

// setTimeout(function, 2000ms)







