/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import api from '@/core/services/api'
import urls from '@/core/collections/urls'
import {AxiosError, AxiosResponse} from 'axios'
import exceptions from '@/core/collections/exceptions'
import {IRule} from '@/core/models/interfaces/lib/IRule'
import {IPost} from '@/core/models/interfaces/article/IPost'
import {handlerError, responseHandler} from '@/core/lib/response-handler'
import Post from '@/core/models/classes/article/Post'
import {vxc} from '@/core/store/store.vuex'
import {ISnackbarProps} from '@/core/store/app/snackbar.store'
import {validationProp} from '@/core/lib/validation'

export const getInValidPostFields = (post: Post) => {
  const rules: IRule[] = [
    {name: 'title', label: 'Заголовок', type: 'string', min: 3},
    {name: 'content', label: 'Содержание', type: 'string', min: 10},
    {name: 'sectionId', label: 'Раздел', type: 'string', min: 3},
    {
      name: 'annotation',
      type: 'object',
      listCheckFields: [{name: 'text', label: 'Текст аннотации', type: 'string', min: 3}],
    },
    {name: 'tags', label: 'Тэги', type: 'array', min: 1},
  ]
  const listError: string[] = []

  validationProp(post, rules, listError)

  return listError
}

export const getPost = (postId: string, title = ''): Promise<Post> => {
  return new Promise<Post>((resolve, reject) => {
    const url = postId ? `${urls.GET_POST_BY_ID}/${postId}` : `${urls.GET_POST_BY_TITLE}/${title}`

    api()
      .get(url)
      .then((res: AxiosResponse) => {
        responseHandler(res, null, false)
          .then((data) => resolve(new Post(data.post)))
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

export const getPosts = (sectionId: string, lastCreateDate: Date, searchText = ''): Promise<IPost[]> => {
  return new Promise<IPost[]>((resolve, reject) => {
    const config = {
      params: {
        sectionId,
        searchText,
        lastCreateDate,
      },
    }

    api()
      .get(`${urls.GET_POSTS}`, config)
      .then((res: AxiosResponse) => {
        responseHandler(res, undefined, false)
          .then((data) => resolve(data.posts.map((post: IPost) => new Post(post))))
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
export const addPost = (post: Post): Promise<Post> => {
  return new Promise<Post>((resolve, reject) => {
    const listErrors = getInValidPostFields(post)

    if (!listErrors.length) {
      api()
        .post(urls.CREATE_POST, post)
        .then((res: AxiosResponse) => {
          responseHandler(res)
            .then((data) => resolve(new Post(data.post)))
            .catch((err: AxiosError) => {
              handlerError(err)
              reject(err)
            })
        })
        .catch((err: AxiosError) => {
          handlerError(err)
          reject(err)
        })
    } else {
      const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
      vxc.snackbar.setSnackBarMsg(msg)
    }
  })
}

export const addLikePost = (postId: string): Promise<Post> => {
  return new Promise<Post>((resolve, reject) => {
    const url = `${urls.SET_POST_LIKE}/${postId}`

    api()
      .post(url)
      .then((res: AxiosResponse) => {
        responseHandler(res, undefined, false)
          .then((data) => resolve(new Post(data.post)))
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

export const removeLikePost = (postId: string): Promise<Post> => {
  return new Promise<Post>((resolve, reject) => {
    const url = `${urls.DELETE_POST_LIKE}/${postId}`

    api()
      .delete(url)
      .then((res: AxiosResponse) => {
        responseHandler(res, undefined, false)
          .then((data) => resolve(new Post(data.post)))
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

export const addSharePost = (postId: string): Promise<Post> => {
  return new Promise<Post>((resolve, reject) => {
    const url = `${urls.ADD_POST_SHARE}/${postId}`

    api()
      .post(url)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => resolve(new Post(data.post)))
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

export const changeStatusPost = (postId: string, status: number): Promise<Post> => {
  return new Promise<Post>((resolve, reject) => {
    const url = `${urls.UPDATE_POST_STATUS}/${postId}`

    api()
      .post(url, {status})
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => resolve(new Post(data.post)))
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

export const editPost = (postId: string, dataToUpdate: Post, isShowMsg = true): Promise<Post> => {
  return new Promise<Post>((resolve, reject) => {
    const listErrors = getInValidPostFields(dataToUpdate)

    if (!listErrors.length) {
      const url = `${urls.UPDATE_POST_BY_ID}/${postId}`

      api()
        .put(url, dataToUpdate)
        .then((res: AxiosResponse) => {
          responseHandler(res, null, isShowMsg)
            .then((data) => resolve(new Post(data.post)))
            .catch((err: AxiosError) => {
              handlerError(err)
              reject(err)
            })
        })
        .catch((err: AxiosError) => {
          handlerError(err)
          reject(err)
        })
    } else {
      const msg: ISnackbarProps = {msg: exceptions.NOT_VALID.text, classes: 'error', params: listErrors}
      vxc.snackbar.setSnackBarMsg(msg)
    }
  })
}
export const deletePost = (postId: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const url = `${urls.UPDATE_POST_BY_ID}/${postId}`

    api()
      .delete(url)
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
