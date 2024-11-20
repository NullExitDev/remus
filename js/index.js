let cw = document.querySelector('.copywriting')
let dateText = document.querySelector('.time-box')
let changeBox = document.querySelector('.change-box')
let changeList = document.querySelector('.change-list')
const xhr = new XMLHttpRequest()
let index = 0
let items = document.querySelectorAll('.item')

document.addEventListener('load', (e) => {
    e.preventDefault()
})

let itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear')
        }
    })
})
items.forEach(item => {
    itemObserver.observe(item)
})

const cwTimer = setInterval(() => {
    index++
    changeList.style.transition = 'all .3s'
    changeList.style.top = -index * changeBox.offsetHeight + 'px'
}, 5000);

changeList.addEventListener('transitionend', () => {
    if (index >= 3) {
        index = 0
        changeList.style.transition = 'none'
        changeList.style.top = -index * changeBox.offsetHeight + 'px'
    }
})

xhr.open('GET', 'https://v1.jinrishici.com/rensheng.txt')
xhr.addEventListener('loadend', () => {
    cw.innerHTML = xhr.response
})
xhr.send()

const date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
dateText.innerHTML = `${year}-${month}-${day}`
