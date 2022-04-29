/*
 * Copyright (c) 21.11.2021, 23:30  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IGenericModel} from '@/core/models/interfaces/app/IGenericModel'
import {IUser} from '@/core/models/interfaces/auth/IUser'
import {IStatus} from '@/core/models/interfaces/article/IStatus'

export interface IRawComment extends IGenericModel {
  content: string
  parentId?: string
  postId: string
}

export interface IComment extends IGenericModel {
  author: IUser | null
  content: string
  creatingDate: string
  parentId: string
  postId: string
  status: IStatus
  errorMsg: string
}
