let input_ck = document.querySelector('#email').value
let password_ck = document.querySelector('#password')

let h_para = document.querySelector('.hide-para')

let button = document.querySelector('.btn')


button.addEventListener('click', () => {
    if (input_ck === ' ') {
        h_para.classList.toggle('show-txt')

    }
    alert(input_ck)
})