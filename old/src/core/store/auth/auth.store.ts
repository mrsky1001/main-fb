/*
 * Copyright (c) 21.11.2021, 21:36  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import ServiceStorage from '@/core/lib/service-storage'
import roles from '@/core/collections/roles'
import {IUser} from '@/core/models/interfaces/auth/IUser'
import User from '@/core/models/classes/auth/User'
// import navbarStore from '@/core/store/app/app-navbar'
import {IRole} from '@/core/models/interfaces/auth/IRole'

import {action, createModule, mutation} from 'vuex-class-component'
import {vxc} from '@/core/store/store.vuex'
import {logout} from '@/core/services/auth.services'

const VuexModule = createModule({
  namespaced: 'auth',
  strict: false,
})

export class AuthStore extends VuexModule {
  public responseKey = ''
  public isCaptchaVerify = false
  public refRecaptcha = {reset: () => null}
  public user = new User(ServiceStorage.getProp('user'))

  get checkRole() {
    return (role: IRole, justOne = false): boolean => {
      const user = this.user
      role = role ? role : roles.UNAUTHORIZED

      if (user.isAuthorized) {
        if (justOne) {
          return user.role === role.value
        } else {
          return user.role <= role.value
        }
      }

      return role.value === roles.UNAUTHORIZED.value
    }
  }

  get isAuth() {
    return this.checkRole(roles.USER)
  }

  get isEditor() {
    return this.checkRole(roles.EDITOR)
  }

  @mutation
  resetRecaptcha() {
    this.responseKey && this.refRecaptcha && this.refRecaptcha.reset()
    this.responseKey = ''
  }

  @mutation
  setResponseKey(val: string) {
    this.responseKey = val
  }

  @mutation
  setRefRecaptcha(val: { reset: () => null }) {
    this.refRecaptcha = val
  }

  @mutation
  saveUser(rawUser: IUser): void {
    const user = new User(rawUser)
    ServiceStorage.setProp('user', user)
    vxc.appNavbar.setAvatar(user.avatar)
    this.user = user
  }

  @action
  async clearUser() {
    this.saveUser(new User())
  }

  @mutation
  onVerify(val: string) {
    this.responseKey = val
    this.isCaptchaVerify = true
  }

  @mutation
  onExpired() {
    this.isCaptchaVerify = false
  }

  @mutation
  reset() {
    this.responseKey = 'false'
    this.isCaptchaVerify = false
  }

  @action
  async logout() {
    return logout()
  }

  // setNoteTab( props: { $route: RouteConfig; $forceUpdate: () => void }):void {
  //   const route = routes.find((r: IRoute) => props.$route.path.includes(r.path) && r.group) as IRoute
  //
  //   if (route && route.group) {
  //   noteRoute = route
  // this.activeClass = 'active-btn'
  // } else {
  // noteRoute = routesObj.NOTES
  // this.activeClass = ''
  // }
  //
  // props.$forceUpdate()
  // },
}

export default AuthStore
