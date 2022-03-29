/*
 * Copyright (c) 21.11.2021, 23:30  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IGenericModel} from '@/core/models/interfaces/app/IGenericModel'
import {IUser} from '@/core/models/interfaces/auth/IUser'
import {IComment} from '@/core/models/interfaces/article/IComment'
import {IAnnotation} from '@/core/models/interfaces/article/IAnnotation'

export interface IPostToUpdate extends IGenericModel {
  title?: string
  content?: string
  tags?: string[]
  likes: string[]
  status: number
  shares: number
  countComments: number
  sectionId: string
  author: IUser // | null
  comments: IComment[]
  annotation: IAnnotation // | null
}

export interface IPost extends IGenericModel {
  title: string
  urlTitle: string
  content: string
  creatingDate: Date
  updatingDate: Date
  publishedDate: Date
  sectionId: string
  views: number
  readTime: number
  countComments: number
  tags: string[]
  likes: string[]
  status: number
  shares: number
  author: IUser // | null
  comments: IComment[]
  annotation: IAnnotation // | null
}
