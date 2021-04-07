const ul = document.querySelector('ul')
const menu = document.querySelector('.menu')

menu.addEventListener('click', () =>{
    ul.classList.toggle('open')
    menu.classList.toggle('open')
})