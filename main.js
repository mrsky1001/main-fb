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


const sections = ['section-list__img-store', 'section-list__img-dev', 'section-list__img-design', 'section-list__img-trip', 'section-list__img-home', 'section-list__img-photo']

sections.forEach(s => {
    const section = document.getElementsByClassName(s)[0]

    section.addEventListener('click', () => {
        section.classList.add('section-list__img-gray')

        const text = document.querySelector('.section-list__img-gray ~ .section__text-block')
        text.classList.add('section__text-block-show')
    })
})

document.addEventListener('click', (e) => {

    sections.forEach((s) => {
        if (!e.target.className.includes(s)
            && !e.target.className.includes('section__text-block-show')
            && !e.target.className.includes('section-list__main-block')
        ) {
            const section = document.getElementsByClassName(s)[0]

            if(section.className.includes('section-list__img-gray')) {
                const text = document.querySelector('.section-list__img-gray ~ .section__text-block')
                text?.classList.remove('section__text-block-show')
            }

            section.classList.remove('section-list__img-gray')
        }
    })

})
