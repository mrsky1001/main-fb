/*
 * Copyright (c) 21.11.2021, 23:34  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IGenericModel} from '@/core/models/interfaces/app/IGenericModel'

export default interface IAccount extends IGenericModel {
  role?: number
  token?: string
  email?: string
  password?: string
  avatar?: string
  username?: string
  isAuthorized?: boolean
  responseKey?: string
}
