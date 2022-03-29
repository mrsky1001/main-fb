/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import Post from '../models/classes/article/Post'
import {handlerError, responseHandler} from '@/core/lib/response-handler'
import api from '@/core/services/api'
import urls from '@/core/collections/urls'
import {AxiosError, AxiosResponse} from 'axios'
import GenericModel from '@/core/models/classes/app/GenericModel'
import {vxc} from '@/core/store/store.vuex'
import {IUser} from '@/core/models/interfaces/auth/IUser'

export const getAllImgs = (postId: string): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    const url = `${urls.GET_IMGS}/${postId}`

    api()
      .get(url)
      .then((res: AxiosResponse) => {
        responseHandler(res, null, false)
          .then((data) => resolve(data.imgs))
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(err)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(err)
      })
  })
}

export const uploadPostImage = (image: Blob, post: Post): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const fd = new FormData()

    fd.append('description', post.urlTitle)
    fd.append('postId', post.id ? post.id : '')
    fd.append('image', image)
    // @ts-ignore
    fd.append('originalName', image.name)

    api()
      .post(urls.UPLOAD_POST_IMG, fd)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => resolve(data.imgUrl))
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(err)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(err)
      })
  })
}

export const uploadAvatarImage = (image: Blob | string, description: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const fd = new FormData()

    fd.append('description', description)
    fd.append('image', image)

    api()
      .post(urls.UPLOAD_AVATAR_IMG, fd)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => resolve(data.imgUrl))
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(err)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(err)
      })
  })
}

export const deleteAvatarImage = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    api()
      .delete(urls.DELETE_AVATAR_IMG)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => {
            const user = GenericModel.assign(vxc.auth.user, data.user) as IUser
            vxc.auth.saveUser(user)
            resolve(data)
          })
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(err)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(err)
      })
  })
}

export const deletePostImage = (imgUrl: string, postId: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const reqData = {imgUrl, postId}

    api()
      .delete(urls.DELETE_POST_IMG, {data: reqData})
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then(() => resolve())
          .catch((err: AxiosError) => {
            handlerError(err)
            reject(err)
          })
      })
      .catch((err: AxiosError) => {
        handlerError(err)
        reject(err)
      })
  })
}
