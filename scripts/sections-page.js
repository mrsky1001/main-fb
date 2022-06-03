/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  03.06.2022, 17:13
 */


const observerSections = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionList = entry.target.querySelector('.section-list__img')
        const sectionHeader = entry.target.querySelector('.section-header')
        const textBlock = entry.target.querySelector('.section__text-block-show')

        if (entry.isIntersecting) {
            setTimeout(() => {
                sectionList.classList.add('section-list__img_hover')
                if (!textBlock) {
                    sectionHeader.classList.add('section-header__hover')
                }
                return // if we added the class, exit the function
            }, 200)
        }

        sectionHeader.classList.remove('section-header__hover')
        sectionList.classList.remove('section-list__img_hover')
    })
}, {rootMargin: '-130px', threshold: .4})

if (window.innerWidth < 801) {
    observerSections.observe(document.getElementById('storeSection'))
    observerSections.observe(document.getElementById('devSection'))
    observerSections.observe(document.getElementById('designSection'))
    observerSections.observe(document.getElementById('tripSection'))
    observerSections.observe(document.getElementById('homeSection'))
    observerSections.observe(document.getElementById('photoSection'))
}


const sections = ['store', 'dev', 'design', 'trip', 'home', 'photo']

sections.forEach(s => {
    const section = document.getElementsByClassName('section-list__img-' + s)[0]
    const sectionBlock = document.getElementById(s + 'Section')
    const sectionName = document.getElementsByClassName('section-name__' + s)[0]

    const selectSection = () => {
        const otherSec = document.getElementsByClassName('section-list__img-gray')

        if (otherSec.length) {
            const text = document.querySelector('.section-list__img-gray ~ .section__text-block')
            text?.classList.remove('section__text-block-show')
            otherSec[0].classList.remove('section-list__img-gray')
        }

        const sectionHeader = section.querySelector('.section-header')
        sectionHeader.classList.remove('section-header__hover')

        section.classList.add('section-list__img-gray')

        const text = document.querySelector('.section-list__img-gray ~ .section__text-block')
        text.classList.add('section__text-block-show')

    }

    sectionBlock.addEventListener('click', selectSection)
    sectionName.addEventListener('click', selectSection)

    sectionBlock.addEventListener('mouseover', () => {
        sectionName.classList.add('section-name__hover')
    })

    sectionBlock.addEventListener('mouseout', () => {
        sectionName.classList.remove('section-name__hover')
    })

    sectionName.addEventListener('mouseover', () => {
        section.classList.add('section-list__img-hover')
    })

    sectionName.addEventListener('mouseout', () => {
        section.classList.remove('section-list__img-hover')
    })

})
