// /*
//  * Copyright (©) 21.10.2021, 14:34. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
//  */
//
// declare module 'vue/types/options' {
//     interface ComponentOptions<V extends Vue> {
//         // this is required because current typings of vee-validate have the old $validates in them, which doesn't work anymore
//         $_veeValidate?: any;
//     }
// }
import {ActionTree, GetterTree, ModuleTree, MutationTree} from "vuex";


declare module '*.vue' {
  // @ts-ignore
  import Vue from 'vue'
  export default Vue
}

// vuex/types/index.d.ts
export interface Module<S, R> {
  namespaced?: boolean;
  state?: S | (() => S);
  getters?: GetterTree<S, R>;
  actions?: ActionTree<S, R>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<R>;
}
