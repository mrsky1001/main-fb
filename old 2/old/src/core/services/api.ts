/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import config from '../../../config/config'
import axios, {AxiosInstance} from 'axios'
import {vxc} from '@/core/store/store.vuex'

export default (): AxiosInstance => {
  return axios.create({
    baseURL: config.server.fullHost,
    headers: {Authorization: `Bearer ${vxc.auth.user.token}`},
  })
}
