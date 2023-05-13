let toggle = document.querySelector('label');
let basic = document.getElementById('basicPrice');
let master = document.getElementById('masterPrice');
let professional = document.getElementById('professionalPrice');




toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');

    

    basic.innerText = '199.99';
    professional.innerText = '249.99';
    master.innerText = '399.99';

})