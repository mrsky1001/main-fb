/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  23.05.2022, 13:57
 */


const observer = new IntersectionObserver(entries => {
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

observer.observe(document.querySelector('.about-page__authors'))


const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.section-list__img')
        const sectionHeader = entry.target.querySelector('.section-header')
        const text = entry.target.querySelector('.section__text-block-show')

        if (entry.isIntersecting) {
            setTimeout(() => {
                square.classList.add('section-list__img_hover')
                if (!text) {
                    sectionHeader.classList.add('section-header__hover')
                }
                return // if we added the class, exit the function
            }, 200)
        }

        sectionHeader.classList.remove('section-header__hover')
        square.classList.remove('section-list__img_hover')
    })
}, {rootMargin: '-130px', threshold: .4})

if (window.innerWidth < 801) {
    observer2.observe(document.getElementById('storeSection'))
    observer2.observe(document.getElementById('devSection'))
    observer2.observe(document.getElementById('designSection'))
    observer2.observe(document.getElementById('tripSection'))
    observer2.observe(document.getElementById('homeSection'))
    observer2.observe(document.getElementById('photoSection'))
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

const clearProductsScale = () => {
    products.forEach((p, i) => {
        const productEl2 = document.getElementById(p.name + 'Product')
        productEl2.querySelector('.product-list__main-block').style.transform = ('scale(1)')
    })
}

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

    const listProducts = document.getElementsByClassName('products-page__list')[0]

    if (!listProducts.contains(e.target)) {
        console.log(e.target)
        products.forEach((p, i) => {

            const productEl2 = document.getElementById(p.name + 'Product')
            productEl2.querySelector('.product-list__main-block').style.transform = ('scale(1)')
        })
    }


})

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
//

if (window.innerWidth > 801) {
    const center = document.getElementsByClassName('products-slider__center-img')[0]
    const centerDescription = document.getElementsByClassName('products-slider__center-description')[0]
    const after = document.getElementsByClassName('products-slider__right-img')[0]
    const before = document.getElementsByClassName('products-slider__left-img')[0]


    const selectProduct = (p, i) => {
        const productName = document.getElementById(p.name + 'ProductName')
        const beforeText = i === 0 ? products[products.length - 1].name : products[i - 1].name
        const afterText = i === products.length - 1 ? products[0].name : products[i + 1].name

        before.style.backgroundImage = "url('../images/products/" + beforeText + ".png')"
        center.style.backgroundImage = "url('../images/products/" + p.name + ".png')"
        center.style.transform = ('scale(' + p.scale + ')')
        centerDescription.innerHTML = p.rusDescription
        center.classList.add('products-slider__show-animate')

        const pName = document.getElementsByClassName('product-name__selected')[0]
        pName.classList.remove('product-name__selected')

        setTimeout(() => {
            center.classList.remove('products-slider__show-animate')
        }, 800)

        productName.classList.add('product-name__selected')

        after.style.backgroundImage = "url('../images/products/" + afterText + ".png')"
    }

    const onClickAfterBeforeSlider = (isAfter = false) => {
        const selectedText = document.getElementsByClassName('product-name__selected')[0]
        const selectedProduct = products.find(p => selectedText.id === p.name + 'ProductName')
        const selectedProductIdx = products.indexOf(selectedProduct)

        let product = ''
        let productIdx = 0

        const increase = isAfter ? 1 : -1

        if (selectedProductIdx === 0 && !isAfter) {
            product = products[products.length - 1]
            productIdx = products.length - 1
        } else if (selectedProductIdx === products.length - 1 && isAfter) {
            product = products[0]
            productIdx = 0
        } else {
            product = products[selectedProductIdx + increase]
            productIdx = selectedProductIdx + increase
        }

        selectProduct(product, productIdx)
    }

    after.addEventListener('click', () => onClickAfterBeforeSlider(true))
    before.addEventListener('click', () => onClickAfterBeforeSlider(false))
    const productListEl = document.getElementsByClassName('products-names__list')[0]

    products.forEach((p, i) => {
        const selectedClass = i === 1 ? ' product-name__selected' : ''

        productListEl.innerHTML += '<li id="' + p.name + 'Product" class="product-names__label ">' +
            ' <div id="' + p.name + 'ProductName" class="product-names__text' + selectedClass + '">' + p.rusName + '</div>' +
            ' </li>'
    })

    products.forEach((p, i) => {
        const product = document.getElementById(p.name + 'ProductName')
        product.addEventListener('click', () => {
            selectProduct(p, i)
        })
    })

    before.style.backgroundImage = "url('../images/products/" + products[0].name + ".png')"
    center.style.backgroundImage = "url('../images/products/" + products[1].name + ".png')"
    center.style.transform = ('scale(' + products[1].scale + ')')
    centerDescription.innerHTML = products[1].rusDescription
    after.style.backgroundImage = "url('../images/products/" + products[2].name + ".png')"
} else {


    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const listImg = entry.target.querySelector('.product-list__img')
            const productHeader = entry.target.querySelector('.product-header')

            if (entry.isIntersecting) {
                setTimeout(() => {
                    listImg.classList.add('product-list__img_hover')
                    productHeader.classList.add('product-header__hover')
                    return // if we added the class, exit the function
                }, 200)
            }

            productHeader.classList.remove('product-header__hover')
            listImg.classList.remove('product-list__img_hover')
        })
    }, {rootMargin: '-130px', threshold: .2})


    const productList = document.getElementsByClassName('products-page__list')[0]

    products.forEach((p, i) => {
        console.log(p)
        productList.insertAdjacentHTML('beforeend', ' <li id="' + p.name + 'Product" class="product-list__block">\n' +
            '                            <div class="product-list__main-block">\n' +
            '                                <div class="product-list__img" style="background-image: url(./products/' + p.name + '.png)">\n' +
            '                                    <h3 class="product-header">' + p.rusName + '</h3>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </li>')
    })


    // const clickProduct = (productEl) => {
    //     console.log('++',productEl)
    //     products.forEach((p, i) => {
    //         const productEl2 = document.getElementById(p.name + 'Product')
    //         productEl2.querySelector('.product-list__main-block').style.transform = ('scale(1)')
    //     })
    //
    //     productEl.querySelector('.product-list__main-block').style.transform = ('scale(1.5)')
    // }

    setTimeout(() => {
        products.forEach((p, i) => {
            const productEl = document.getElementById(p.name + 'Product')
            observer3.observe(productEl)

            // productEl.addEventListener('click', () => clickProduct(productEl))
        })
    }, 1000)


}


