/*
 * Copyright (c) 21.11.2021, 21:49  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import config from '../../../../config/config'
import {createModule, mutation} from 'vuex-class-component'

const VuexModule = createModule({
  namespaced: 'footer',
  strict: false,
})

export class AppFooterStore extends VuexModule {
  footerImg = ''

  @mutation resetFooterImg() {
    const listFooterImg = [
      'berries',
      'car',
      'code',
      'fish',
      'flowers',
      'garage',
      'guitar',
      'kitchen',
      'sewing',
      'town',
      'watch',
    ]
    const length = listFooterImg.length - 1
    const num = Math.floor(Math.random() * length)

    this.footerImg = `${config.paths.footerImgs}${listFooterImg[num]}.png`
  }
}

export default AppFooterStore
