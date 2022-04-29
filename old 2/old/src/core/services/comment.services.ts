/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import api from '@/core/services/api'
import urls from '@/core/collections/urls'
import {AxiosError, AxiosResponse} from 'axios'
import exceptions from '@/core/collections/exceptions'
import {IRule} from '@/core/models/interfaces/lib/IRule'
import {IComment, IRawComment} from '@/core/models/interfaces/article/IComment'
import {handlerError, responseHandler} from '@/core/lib/response-handler'
import Comment from '@/core/models/classes/article/Comment'
import {vxc} from '@/core/store/store.vuex'
import {ISnackbarProps} from '@/core/store/app/snackbar.store'
import {validationProp} from '@/core/lib/validation'

const getInValidCommentFields = (comment: IRawComment) => {
  const rules: IRule[] = [
    {name: 'content', label: 'Содержание', type: 'string', min: 2, max: 1000},
    {name: 'postId', label: 'postId', type: 'string', min: 1},
  ]
  const listError: string[] = []

  validationProp(comment, rules, listError)

  return listError
}

export const getComment = (commentId: string): Promise<Comment> => {
  return new Promise<Comment>((resolve, reject) => {
    const url = `${urls.GET_COMMENT_BY_ID}/${commentId}`

    api()
      .get(url)
      .then((res: AxiosResponse) => {
        responseHandler(res, null, false)
          .then((data) => resolve(new Comment(data.comment)))
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

export const getComments = (postId: string): Promise<Comment[]> => {
  return new Promise<Comment[]>((resolve, reject) => {
    const url = `${urls.GET_COMMENTS}/${postId}`

    api()
      .get(url)
      .then((res: AxiosResponse) => {
        responseHandler(res, undefined, false)
          .then((data) => resolve(data.comments.map((comment: IComment) => new Comment(comment))))
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
export const addComment = (comment: IRawComment): Promise<Comment> => {
  return new Promise<Comment>((resolve, reject) => {
    const listErrors = getInValidCommentFields(comment)

    if (!listErrors.length) {
      api()
        .post(urls.CREATE_COMMENT, comment)
        .then((res: AxiosResponse) => {
          responseHandler(res)
            .then((data) => resolve(new Comment(data.comment)))
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

export const addLikeComment = (commentId: string): Promise<Comment> => {
  return new Promise<Comment>((resolve, reject) => {
    const url = `${urls.SET_COMMENT_LIKE}/${commentId}`

    api()
      .post(url)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => resolve(new Comment(data.comment)))
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

export const removeLikeComment = (commentId: string): Promise<Comment> => {
  return new Promise<Comment>((resolve, reject) => {
    const url = `${urls.DELETE_COMMENT_LIKE}/${commentId}`

    api()
      .delete(url)
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => resolve(new Comment(data.comment)))
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

export const changeStatusComment = (commentId: string, status: number): Promise<Comment> => {
  return new Promise<Comment>((resolve, reject) => {
    const url = `${urls.UPDATE_COMMENT_STATUS}/${commentId}`

    api()
      .post(url, {status})
      .then((res: AxiosResponse) => {
        responseHandler(res)
          .then((data) => resolve(new Comment(data.comment)))
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

export const editComment = (commentId: string, dataToUpdate: Comment): Promise<Comment> => {
  return new Promise<Comment>((resolve, reject) => {
    const listErrors = getInValidCommentFields(dataToUpdate)

    if (!listErrors.length) {
      const url = `${urls.UPDATE_COMMENT_BY_ID}/${commentId}`

      api()
        .put(url, dataToUpdate)
        .then((res: AxiosResponse) => {
          responseHandler(res)
            .then((data) => resolve(new Comment(data.comment)))
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
export const deleteComment = (commentId: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const url = `${urls.UPDATE_COMMENT_BY_ID}/${commentId}`

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
