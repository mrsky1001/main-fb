/*
 * Copyright (c) 21.11.2021, 23:30  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IGenericModel} from '@/core/models/interfaces/app/IGenericModel'
import {IUser} from '@/core/models/interfaces/auth/IUser'
import {IPost} from '@/core/models/interfaces/article/IPost'

export interface ISectionToUpdate extends IGenericModel {
  name: string
  description: string
  posts: IPost[]
}

export interface ISection extends IGenericModel {
  author: IUser
  name: string
  description: string
  creatingDate: Date
  posts: IPost[]
}
