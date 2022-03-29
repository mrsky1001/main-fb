/*
 * Copyright (c)  Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru> 18.10.2021, 21:16
 */

import api from '@/core/services/api'
import urls from '@/core/collections/urls'
import {handlerError, responseHandler} from '@/core/lib/response-handler'
import {ILogin} from '@/core/models/interfaces/auth/ILogin'
import {AxiosError, AxiosResponse} from 'axios'
import sha1 from 'sha1'
import {IRegistration} from '@/core/models/interfaces/auth/IRegistration'
import IAccount from '@/core/models/classes/auth/Account'
import GenericModel from '@/core/models/classes/app/GenericModel'
import {IUser} from '@/core/models/interfaces/auth/IUser'
import {vxc} from '@/core/store/store.vuex'

export const isAuthorized = (isRedirectToLogin = false): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    api()
      .get(urls.IS_AUTHORIZED)
      .then((res: AxiosResponse) =>
        responseHandler(res, null, false)
          .then((data) => {
            vxc.auth.saveUser(data.user)
            resolve(true)
          })
          .catch((err: AxiosError) => {
            vxc.auth.clearUser()
            handlerError(err, isRedirectToLogin, null, false)
            reject(false)
          })
      )
      .catch((err: AxiosError) => {
        vxc.auth.clearUser()
        handlerError(err, isRedirectToLogin, null, false)
        reject(false)
      })
  })
}

export const login = (params: ILogin): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    params.password = sha1(params.password)

    api()
      .post(urls.LOGIN, params)
      .then((res: AxiosResponse) =>
        responseHandler(res)
          .then((data) => {
            vxc.auth.saveUser(data.user)
            resolve(true)
          })
          .catch((err) => {
            handlerError(err)
            reject(false)
          })
      )
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(false)
      })
  })
}
export const logout = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    api()
      .post(urls.LOGOUT)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then(() => {
            vxc.auth.clearUser()
            resolve(true)
          })
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(false)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(false)
      })
  })
}
export const registration = (params: IRegistration): Promise<IUser> => {
  return new Promise<IUser>((resolve, reject) => {
    params.password = sha1(params.password)

    api()
      .post(urls.REGISTRATION, params)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data: IUser) => {
            resolve(data)
          })
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(false)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(false)
      })
  })
}
export const saveAccount = (params: IAccount): Promise<IUser> => {
  return new Promise<IUser>((resolve, reject) => {
    params.password && (params.password = sha1(params.password))

    api()
      .put(urls.UPDATE_USER, params)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => {
            const user = GenericModel.assign(vxc.auth.user, data.user) as IUser
            vxc.auth.saveUser(user)
            resolve(data)
          })
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(false)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(false)
      })
  })
}
export const deleteAccount = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    api()
      .delete(urls.DELETE_USER)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then(() => {
            vxc.auth.clearUser()
            resolve(true)
          })
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(false)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(false)
      })
  })
}

export const getUser = (): Promise<IUser> => {
  return new Promise<IUser>((resolve, reject) => {
    api()
      .get(urls.GET_USER)
      .then((res: AxiosResponse) =>
        responseHandler(res, null, false)
          .then((data) => {
            resolve(data.user)
          })
          .catch((err) => {
            handlerError(err, true)
            reject()
          })
      )
      .catch((err: AxiosError) => {
        handlerError(err, true)
        reject()
      })
  })
}

// export const getRoles = (): Promise<IRole[]> => {
//     return new Promise<IRole[]>((resolve, reject) => {
//         api()
//             .get(urls.ROLES)
//             .then((res: AxiosResponse) => {
//                 responseHandler(res)
//                     .then((data) => {
//                         const roles = data.map((role: IRole) => new Role(role))
//                         resolve(roles)
//                     })
//                     .catch((err: AxiosError) => {
//                         handlerError(err)
//                         reject(false)
//                     })
//             })
//             .catch((err: AxiosError) => {
//                 handlerError(err)
//                 reject(false)
//             })
//     })
// }
