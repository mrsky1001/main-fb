/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  03.06.2022, 17:14
 */

if (window.location.href.includes('post')) {
    const href = window.location.href.includes('#')?window.location.href.split('#')[0]:window.location.href

    const listUrlParts = href.split('/')
    const url = "https://foma-blog.ru:8081/api/post-undefined/" + listUrlParts[listUrlParts.length - 1]

    fetch(url, {
        method: "GET"
    }).then((res) => {
        res.json().then((data)=>{
            if(data && data.data && data.data.url) {
                window.location.href=data.data.url
            }
        })
    }).catch((err) => {
        console.log(err)
    })
}


document.addEventListener('click', (e) => {
    sections.forEach((s) => {
        const sectionBlock = document.getElementById(s + 'Section')
        const sectionsNames = document.getElementById('sectionsNames')

        if (sectionBlock && !sectionBlock.contains(e.target) && !sectionsNames.contains(e.target)) {
            const section = document.getElementsByClassName('section-list__img-' + s)[0]
            const text = document.querySelector('.section-list__img-' + s + ' ~ .section__text-block-show')

            text?.classList.remove('section__text-block-show')
            section?.classList.remove('section-list__img-gray')
        }
    })

    const listProducts = document.getElementsByClassName('products-page__list')[0]

    if (window.innerWidth < 801 && !listProducts.contains(e.target)) {
        products.forEach((p, i) => {

            const productEl2 = document.getElementById(p.name + 'Product').querySelector('.product-list__main-block')

            if (productEl2) {
                productEl2.style.transform = ('scale(1)')
            }
        })
    }
})

