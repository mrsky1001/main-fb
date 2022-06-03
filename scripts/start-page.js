/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  03.06.2022, 17:13
 */


const header = document.getElementsByClassName('start-page__header')[0]
const headerBgImg = document.getElementsByClassName('header__img')[0]

const showHeader = (e) => {
    headerBgImg.classList.add('header__img-hover')
    setTimeout(() => {
        const headerList = document.getElementsByClassName('header__list')[0]
        headerList.classList.add('header-list__hover')
    }, 500)
}
header.addEventListener('mouseenter', showHeader)
header.addEventListener('mouseover', showHeader)


header.addEventListener('mouseleave', (e) => {
    headerBgImg.classList.remove('header__img-hover')
    setTimeout(() => {
        const headerList = document.getElementsByClassName('header__list')[0]
        headerList.classList.remove('header-list__hover')
    }, 1000)
})

const observerAuthors = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.authors__img')

        if (entry.isIntersecting) {
            setTimeout(() => {
                square.classList.add('authors-img__animation')
                return // if we added the class, exit the function
            }, 1000)
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('authors-img__animation')
    })
})

observerAuthors.observe(document.querySelector('.about-page__authors'))


