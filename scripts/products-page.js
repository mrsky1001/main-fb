/*
 * Copyright (c) Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru>  03.06.2022, 17:13
 */

const callbackBiggerW800 = () => {
    const center = document.getElementsByClassName('products-slider__center-img')[0]
    const centerDescription = document.getElementsByClassName('products-slider__center-description')[0]
    const after = document.getElementsByClassName('products-slider__right-img')[0]
    const before = document.getElementsByClassName('products-slider__left-img')[0]


    const selectProduct = (p, i) => {
        const productName = document.getElementById(p.name + 'ProductName')
        const beforeText = i === 0 ? products[products.length - 1].name : products[i - 1].name
        const afterText = i === products.length - 1 ? products[0].name : products[i + 1].name

        before.style.backgroundImage = "url('../products/" + beforeText + ".png')"
        center.style.backgroundImage = "url('../products/" + p.name + ".png')"
        center.style.transform = ('scale(' + p.scale + ')')
        centerDescription.innerHTML = p.rusDescription
        center.classList.add('products-slider__show-animate')

        const pName = document.getElementsByClassName('product-name__selected')[0]
        pName.classList.remove('product-name__selected')

        setTimeout(() => {
            center.classList.remove('products-slider__show-animate')
        }, 800)

        productName.classList.add('product-name__selected')

        console.log(afterText)
        after.style.backgroundImage = "url('../products/" + afterText + ".png')"
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

    before.style.backgroundImage = "url('../products/" + products[0].name + ".png')"
    center.style.backgroundImage = "url('../products/" + products[1].name + ".png')"
    center.style.transform = ('scale(' + products[1].scale + ')')
    centerDescription.innerHTML = products[1].rusDescription
    after.style.backgroundImage = "url('../products/" + products[2].name + ".png')"
}

const callbackLowerW800 = () => {
    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const listImg = entry.target.querySelector('.product-list__img')
            const productHeader = entry.target.querySelector('.product-header__container')

            if (entry.isIntersecting) {
                setTimeout(() => {
                    listImg.classList.add('product-list__img_hover')
                    productHeader.classList.add('product-header__hover')
                    return // if we added the class, exit the function
                }, 200)
            }

            productHeader?.classList.remove('product-header__hover')
            listImg?.classList.remove('product-list__img_hover')
        })
    }, {rootMargin: '-130px', threshold: .2})


    const productList = document.getElementsByClassName('products-page__list')[0]

    products.forEach((p, i) => {
        productList.insertAdjacentHTML('beforeend', ' <li id="' + p.name + 'Product" class="product-list__block">\n' +
            '                            <div class="product-list__main-block">\n' +
            '                                <div class="product-list__img" style="background-image: url(./products/' + p.name + '.png)">\n' +
            ' <div class="product-header__container">\n'+
            '                                    <h3 class="product-header">' + p.rusDescription + '</h3>\n' +
            '                                    <p class="product-subheader">' + p.rusName + '</p>\n' +
            '                               </div> </div>\n' +
            '                            </div>\n' +
            '                        </li>')
    })

    setTimeout(() => {
        products.forEach((p, i) => {
            const productEl = document.getElementById(p.name + 'Product')
            observer3.observe(productEl)

            // productEl.addEventListener('click', () => clickProduct(productEl))
        })
    }, 2000)
}

let lastWindowWidth = window.innerWidth

if (window.innerWidth > 800) {
    callbackBiggerW800()
} else if (window.innerWidth < 801) {
    callbackLowerW800()
}

// window.addEventListener('resize', (e) => {
//     if (window.innerWidth > 800 && lastWindowWidth < 801) {
//         callbackBiggerW800()
//         const productList = document.getElementsByClassName('products-page__list-container')[0]
//         productList.style.display = 'none'
//     } else if (window.innerWidth < 801 && lastWindowWidth > 800) {
//         callbackLowerW800()
//
//     }
//
//     lastWindowWidth = window.innerWidth
// }, true);
