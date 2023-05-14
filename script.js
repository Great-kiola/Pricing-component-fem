let toggle = document.querySelector('label');
let yearly = document.querySelector('.yearly');
let monthly = document.querySelector('.monthly');

let yearly2 = document.querySelector('.yearly2');
let monthly2 = document.querySelector('.monthly2');

let yearly3 = document.querySelector('.yearly3');
let monthly3 = document.querySelector('.monthly3');



toggle.addEventListener("click", () => {

    toggle.classList.toggle('active');

    yearly.classList.toggle('show');
    monthly.classList.toggle('show');

    yearly2.classList.toggle('show');
    monthly2.classList.toggle('show');

    yearly3.classList.toggle('show');
    monthly3.classList.toggle('show');
    
});




