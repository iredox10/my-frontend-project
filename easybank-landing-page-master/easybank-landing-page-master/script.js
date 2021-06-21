const hamburger = document.querySelector('nav .menu')
const links = document.querySelector('nav ul')

hamburger.addEventListener('click', function(){
    links.classList.toggle('open')
    hamburger.classList.toggle('open')
})