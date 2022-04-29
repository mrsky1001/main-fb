/*
 * Copyright (c) 21.11.2021, 23:34  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import roles from '../../../collections/roles'
import {IUser} from '@/core/models/interfaces/auth/IUser'
import GenericModel from '@/core/models/classes/app/GenericModel'
import {getTimeSalt} from '@/core/lib/tools.lib'

export default class User extends GenericModel implements IUser {
  private _role: number = roles.UNAUTHORIZED.value
  private _token = ''
  private _email = ''
  private _password = ''
  private _avatar = ''
  private _username = ''
  private _lastRecaptchaDate = new Date()
  private _lastLoginDate = new Date()
  private _registrationDate = new Date()
  private _isAuthorized = false

  constructor(initObj?: IUser) {
    super(initObj)
    initObj && this.init(initObj)
  }

  init(initObj: IUser): void {
    this._username = initObj.username ? initObj.username : this._username
    this._role = initObj.role !== undefined ? initObj.role : this._role
    this._token = initObj.token ? initObj.token : this._token
    this._email = initObj.email ? initObj.email : this._email
    this._avatar = initObj.avatar ? initObj.avatar + getTimeSalt() : this._avatar
    this._lastRecaptchaDate = initObj.lastRecaptchaDate ? initObj.lastRecaptchaDate : this._lastRecaptchaDate
    this._lastLoginDate = initObj.lastLoginDate ? initObj.lastLoginDate : this._lastLoginDate
    this._registrationDate = initObj.registrationDate ? initObj.registrationDate : this._registrationDate
    this._isAuthorized = initObj.isAuthorized ? initObj.isAuthorized : this._isAuthorized
  }

  get lastRecaptchaDate(): Date {
    return this._lastRecaptchaDate
  }

  set lastRecaptchaDate(value: Date) {
    this._lastRecaptchaDate = value
  }

  get lastLoginDate(): Date {
    return this._lastLoginDate
  }

  set lastLoginDate(value: Date) {
    this._lastLoginDate = value
  }

  get registrationDate(): Date {
    return this._registrationDate
  }

  set registrationDate(value: Date) {
    this._registrationDate = value
  }

  get password(): string {
    return this._password
  }

  get avatar(): string {
    return this._avatar
  }

  set avatar(value: string) {
    this._avatar = value
  }

  get token(): string {
    return this._token
  }

  get isAuthorized(): boolean {
    return this._isAuthorized
  }

  get username(): string {
    return this._username
  }

  get email(): string {
    return this._email
  }

  get role(): number {
    return this._role
  }
}
