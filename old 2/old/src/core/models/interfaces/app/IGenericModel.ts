/*
 * Copyright (c) 21.11.2021, 23:20  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

export interface IGenericModel {
  id?: string
  _id?: string
  jsonFormatObjects?: [
    {
      name: string
      valuePath: string
    }
  ]
}
