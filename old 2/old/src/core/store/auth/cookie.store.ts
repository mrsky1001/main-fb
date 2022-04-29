/*
 * Copyright (c) 21.11.2021, 21:37  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import ServiceStorage from '@/core/lib/service-storage'
import {createModule, mutation} from 'vuex-class-component'

const VuexModule = createModule({
  namespaced: 'cookie',
  strict: false,
})

export class CookieStore extends VuexModule {
  isAgreeCookie = ServiceStorage.getProp('isAgreeCookie')

  @mutation setAgreeCookie() {
    ServiceStorage.setProp('isAgreeCookie', true)
    this.isAgreeCookie = ServiceStorage.getProp('isAgreeCookie')
  }
}

export default CookieStore
