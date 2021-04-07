const btn = document.querySelector('button')
const inputs = document.querySelectorAll('input')



btn.addEventListener('click',(e) =>{
    e.preventDefault()
    inputs.forEach(input =>{
        const parent = input.parentElement
        const errMsg = input.nextElementSibling
        const errIcon = input.previousElementSibling
        if(input.value <6){
            errMsg.classList.add('open')
            errIcon.classList.add('open')
            input.style.border = '2px solid red'
        }
        else{
            errMsg.classList.remove('open')
            errIcon.classList.remove('open')
            input.style.border = ''
        }
    })
})


// btn.addEventListener('click', (e) =>{
//     e.preventDefault()
//     inputs.forEach(input =>{
//         if (input.value <6 && input.type === 'text') {
//             const parents = input.parentElement
//             const iconError = input.previousElementSibling
//             const errorMsg = input.nextElementSibling
//             errorMsg.classList.add('open')
//             iconError.classList.add('open')
//             input.style.border = '2px solid red'
//             console.log(errorMsg)
//         }
//         else{
//             input.style.border = ''
//             errorMsg.classList.remove('open')
//             iconError.classList.remove('open')
//             console.log(errorMsg)
//         }
//     })
// })
