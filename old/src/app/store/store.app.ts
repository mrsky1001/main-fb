/*
 * Copyright (c) 17.12.2021, 22:22  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        // ...extractVuexModule(EditPostStore),
    },
})

export const vxa = {
    // post: createProxy(store, PostStore),
}
