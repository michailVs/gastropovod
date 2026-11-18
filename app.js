const links = {
    "tg" : 'https://t.me/maria_gastropovod',
    "vk" : 'https://m.vk.ru/club242075338',
    "max" : 'https://max.ru/u/f9LHodD0cOJihAcbTiE2xP-aCkrAVxJh09DyMo3a34z_azcnW02DVkEmAKQ',
    "phone": '',
    "inst" : ''
}

const constactList = document.querySelector('.contact-list');

constactList.addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case 'Страница в Телеграм':
            window.open(links.tg, '_blank')
            break;
        case 'Сообщество Вконтакте':
            window.open(links.vk, '_blank')
            break;
        case 'Страница в Инстаграм':
            // window.open(links.inst, '_blank')
            alert('Такой ссылки пока нету')
            break;
        case 'Номер телефона':
            // window.open(links.phone, '_blank')
            lert('Такой ссылки пока нету')
            break;
        case 'Страница в MAX':
            window.open(links.max, '_blank')
            break;
    }
})

const connectBtn = document.querySelector('.main-btn')
const contact = document.querySelector('.contact')
connectBtn.addEventListener('click', e => {
    e.preventDefault()
    window.scrollTo({
        top: contact.offsetTop,
        behavior: "smooth"
    })
})

const scrollBtn = document.createElement('button')
scrollBtn.classList.add('scroll')
const scrollLeftArrow = document.createElement('span') 
const scrollRightArrow = document.createElement('span') 
scrollLeftArrow.classList.add('left')
scrollRightArrow.classList.add('right')
scrollBtn.appendChild(scrollLeftArrow)
scrollBtn.appendChild(scrollRightArrow)

window.addEventListener('scroll', () => {
    if (window.scrollY >= contact.offsetTop) {
        document.body.appendChild(scrollBtn)
    }
    else {
        if (document.querySelector('body > .scroll')) {
            document.body.removeChild(scrollBtn)
        }
    }
})

scrollBtn.addEventListener('click', e => {
    e.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})