/*
 * Copyright (c)  Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru> 18.10.2021, 20:56
 */

export interface IRegistration {
  username: string
  email: string
  password: string
  agreeAgreement: boolean
  agreeConditions: boolean
  responseKey: string
}
