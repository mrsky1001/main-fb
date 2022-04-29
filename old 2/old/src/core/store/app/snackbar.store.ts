/*
 * Copyright (c) 21.11.2021, 21:49  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {createModule, mutation} from 'vuex-class-component'

export interface ISnackbarProps {
  msg: string
  classes?: string
  params?: string[]
}

const VuexModule = createModule({
  namespaced: 'snackBar',
  strict: false,
})

export class SnackBarStore extends VuexModule {
  snackBarMsg = ''
  snackBarParams?: string[] = []
  snackBarClasses? = ''
  isShowSnackbar = false

  @mutation
  setShowSnackbar(val: boolean) {
    this.isShowSnackbar = val
  }

  @mutation
  setSnackBarMsg(props: ISnackbarProps) {
    const showMsg = () => {
      this.snackBarMsg = props.msg
      this.snackBarClasses = props.classes ? props.classes : 'info'
      this.snackBarParams = props.params
      this.isShowSnackbar = true
    }

    if (this.isShowSnackbar) {
      this.isShowSnackbar = false
      this.snackBarMsg = ''
      this.snackBarClasses = ''
      this.snackBarParams = []

      setTimeout(() => {
        showMsg()
      }, 100)
    } else {
      showMsg()
    }
  }
}

export default SnackBarStore
