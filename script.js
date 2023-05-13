let toggle = document.querySelector('label');
let basic = document.getElementById('basicPrice');
let master = document.getElementById('masterPrice');
let professional = document.getElementById('professionalPrice');

let yearly = document.getElementById('yearly');
let monthly = document.getElementById('monthly');




toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');


    yearly.classList.toggle('show');
    monthly.classList.toggle('show');

})