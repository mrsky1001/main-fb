/*
 * Copyright (c) 21.11.2021, 21:20  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {deleteAccount, getUser, saveAccount} from '@/core/services/auth.services'
import {deleteAvatarImage, uploadAvatarImage} from '@/core/services/img.services'
import recaptchaLib from '@/core/lib/recaptcha.lib'
import {getTimeSalt} from '@/core/lib/tools.lib'
import {action, createModule, mutation} from 'vuex-class-component'
import {vxc} from '@/core/store/store.vuex'

const VuexModule = createModule({
  namespaced: 'account',
  strict: false,
})

export class AccountStore extends VuexModule {
  email = ''
  avatar = ''
  username = ''
  password = ''
  avatarBlob: Blob = new Blob()
  isLoaded = false
  isShowPassword = false
  isShowAvaMenuModal = false
  isShowAvaUploadModal = false
  validUsernameRules = {required: true, min: 3, max: 10, regex: /(?![.\n])((?=.*[a-z])|(?=.*[A-Z])).*$/}
  validPasswordRules = {min: 8, max: 20, regex: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/}
  validAvatarRules = {}
  validEmailRules = {required: true, email: true}

  @mutation setUsername(val: string) {
    this.username = val
  }

  @mutation setEmail(val: string) {
    this.email = val
  }

  @mutation setPassword(val: string) {
    this.password = val
  }

  @mutation setAvatar(val: string) {
    this.avatar = val + getTimeSalt()
  }

  @mutation setIsShowAvaMenuModal(val: boolean) {
    this.isShowAvaMenuModal = val
  }

  @mutation setIsShowUploadModal(val: boolean) {
    this.isShowAvaUploadModal = val
  }

  @mutation saveAvatar(val: { croppedFile: Blob }) {
    this.isLoaded = false
    this.avatar = URL.createObjectURL(val.croppedFile)
    this.avatarBlob = val.croppedFile
  }

  @mutation setIsShowPassword(val: boolean) {
    this.isShowPassword = val
  }

  @action
  async getAccountData() {
    this.password = ''

    getUser().then((user) => {
      this.username = user.username
      this.avatar = user.avatar
      this.email = user.email
      this.isLoaded = true
    })

    vxc.auth.reset()
  }

  @action
  async saveAccount() {
    if (vxc.auth.isCaptchaVerify) {
      if (this.avatarBlob) {
        uploadAvatarImage(this.avatarBlob, this.username)
          .then((imgUrl) => {
            saveAccount({
              username: this.username,
              email: this.email,
              password: this.password ?? undefined,
              responseKey: vxc.auth.responseKey,
              avatar: imgUrl,
            })
              .then(() => {
                this.avatar = imgUrl + getTimeSalt()
                this.isLoaded = true
              })
              .catch(vxc.auth.resetRecaptcha)
          })
          .catch(vxc.auth.resetRecaptcha)
      } else {
        saveAccount({
          username: this.username,
          email: this.email,
          password: this.password ?? undefined,
          responseKey: vxc.auth.responseKey,
        })
          .then(() => {
            this.isLoaded = true
          })
          .catch(vxc.auth.resetRecaptcha)
      }
    } else {
      recaptchaLib.errorEvent()
    }
  }

  @action
  async deleteAvatar() {
    deleteAvatarImage().then(() => {
      this.avatar = ''
      this.avatarBlob = new Blob()
      this.isShowAvaMenuModal = false
      this.isLoaded = false
    })
  }

  @action
  async deleteAccount() {
    return deleteAccount()
  }
}

export default AccountStore
