/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.05.2022, 13:57
 */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.authors__img');

        if (entry.isIntersecting) {
            setTimeout(() => {
                square.classList.add('authors-img__animation');
                return; // if we added the class, exit the function
            }, 1000)
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('authors-img__animation');
    });
});

observer.observe(document.querySelector('.about-page__authors'));


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


document.addEventListener('click', (e) => {

    sections.forEach((s) => {
        const sectionBlock = document.getElementById(s + 'Section')
        const sectionsNames = document.getElementById('sectionsNames')

        if (!sectionBlock.contains(e.target) && !sectionsNames.contains(e.target)) {
            const section = document.getElementsByClassName('section-list__img-' + s)[0]
            const text = document.querySelector('.section-list__img-' + s + ' ~ .section__text-block-show')

            text?.classList.remove('section__text-block-show')
            section?.classList.remove('section-list__img-gray')
        }
    })

})

const header = document.getElementsByClassName('start-page__header')[0]
const headerBgImg = document.getElementsByClassName('header__img')[0]

header.addEventListener('mouseover', (e) => {
    headerBgImg.classList.add('header__img-hover')
})


header.addEventListener('mouseout', (e) => {
    headerBgImg.classList.remove('header__img-hover')
})
