/*
 * Copyright (c) 21.11.2021, 23:51  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {vxc} from '@/core/store/store.vuex'

const recaptchaLib = {
  errorEvent: (): void => {
    const props = {classes: 'red', msg: 'Не выполнена проверка reCaptcha!'}
    vxc.snackbar.setSnackBarMsg(props)
    // throw Error(props.msg)
  },
}

export default recaptchaLib
