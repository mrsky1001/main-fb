/*
 * Copyright (c) 21.11.2021, 23:20  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

export interface ICheckRule {
  name: string
  type: string
  label?: string
  min?: number
  max?: number
}
