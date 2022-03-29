/*
 * Copyright (c) 21.11.2021, 23:19  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IGenericModel} from '@/core/models/interfaces/app/IGenericModel'

export interface IRole extends IGenericModel {
  name: string
  value: number
}
