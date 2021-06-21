const menu = document.querySelector('.menu')
const links = document.querySelector('.links')
const ul = document.querySelectorAll('.links ul')
const navLinks = Array.from(ul)
let body = document.body
menu.addEventListener('click',()=>{
    menu.classList.toggle('open')
    links.classList.toggle('open')
})
navLinks.forEach(link =>{
    let li = link.parentElement
    let list = li.querySelector('ul')
    let a = li.firstElementChild
    // check for a specific screen size
    let mq = window.matchMedia("(min-width: 900px)")
    if(mq.matches){
        a.addEventListener('click',(e)=>{
            e.preventDefault()
            list.classList.add('open')
        })
    }
   a.addEventListener('click', (e)=>{
       e.preventDefault()
       list.classList.toggle('open')
   })
   a.addEventListener('blur',(e)=>{
       e.preventDefault()
       list.classList.remove('open')
   })
})
