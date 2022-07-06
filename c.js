let ic1 = document.querySelector('#ic-01')
let ic2 = document.querySelector('#ic-02')
let ic3 = document.querySelector('#ic-03')
let ic4 = document.querySelector('#ic-04')
let ic5 = document.querySelector('#ic-05')
let ic6 = document.querySelector('#ic-06')

let h1 = document.querySelector('#hid-01')
let h2 = document.querySelector('#hid-02')
let h3 = document.querySelector('#hid-03')
let h4 = document.querySelector('#hid-04')
let h5 = document.querySelector('#hid-05')
let h6 = document.querySelector('#hid-06')


ic1.addEventListener('click', () => {
    h1.classList.toggle('show')
    if (h2.classList.contains('show')) {
        h2.classList.remove('show')
    }
    if (h3.classList.contains('show')) {
        h3.classList.remove('show')

    }
    if (h4.classList.contains('show')) {
        h4.classList.remove('show')

    }
    if (h5.classList.contains('show')) {
        h5.classList.remove('show')

    }
    if (h6.classList.contains('show')) {
        h6.classList.remove('show')

    }
})

ic2.addEventListener('click', () => {
    h2.classList.toggle('show')
    if (h1.classList.contains('show')) {
        h1.classList.remove('show')
    }
    if (h3.classList.contains('show')) {
        h3.classList.remove('show')

    }
    if (h4.classList.contains('show')) {
        h4.classList.remove('show')

    }
    if (h5.classList.contains('show')) {
        h5.classList.remove('show')

    }
    if (h6.classList.contains('show')) {
        h6.classList.remove('show')

    }
})

ic3.addEventListener('click', () => {
    h3.classList.toggle('show')
    if (h1.classList.contains('show')) {
        h1.classList.remove('show')
    }
    if (h2.classList.contains('show')) {
        h2.classList.remove('show')

    }
    if (h4.classList.contains('show')) {
        h4.classList.remove('show')

    }
    if (h5.classList.contains('show')) {
        h5.classList.remove('show')

    }
    if (h6.classList.contains('show')) {
        h6.classList.remove('show')

    }
})

ic4.addEventListener('click', () => {
    h4.classList.toggle('show')
    if (h1.classList.contains('show')) {
        h1.classList.remove('show')
    }
    if (h2.classList.contains('show')) {
        h2.classList.remove('show')

    }
    if (h3.classList.contains('show')) {
        h3.classList.remove('show')

    }
    if (h5.classList.contains('show')) {
        h5.classList.remove('show')

    }
    if (h6.classList.contains('show')) {
        h6.classList.remove('show')

    }
})

ic5.addEventListener('click', () => {
    h5.classList.toggle('show')
    if (h1.classList.contains('show')) {
        h1.classList.remove('show')
    }
    if (h2.classList.contains('show')) {
        h2.classList.remove('show')

    }
    if (h3.classList.contains('show')) {
        h3.classList.remove('show')

    }
    if (h4.classList.contains('show')) {
        h4.classList.remove('show')

    }
    if (h6.classList.contains('show')) {
        h6.classList.remove('show')

    }
})

ic6.addEventListener('click', () => {
    h6.classList.toggle('show')
    if (h1.classList.contains('show')) {
        h1.classList.remove('show')
    }
    if (h3.classList.contains('show')) {
        h3.classList.remove('show')

    }
    if (h4.classList.contains('show')) {
        h4.classList.remove('show')

    }
    if (h5.classList.contains('show')) {
        h5.classList.remove('show')

    }
    if (h2.classList.contains('show')) {
        h2.classList.remove('show')

    }
})


