/*
 * Copyright (c) 21.11.2021, 23:34  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import roles from '@/core/collections/roles'
import {IRole} from '@/core/models/interfaces/auth/IRole'
import GenericModel from '@/core/models/classes/app/GenericModel'

export default class Role extends GenericModel implements IRole {
  private _name = ''
  private _value = roles.UNAUTHORIZED.value

  constructor(initObj: IRole) {
    super(initObj)
    this.init(initObj)
  }

  init(initObj: IRole): void {
    this.name = initObj.name ? initObj.name : this._name
    this.value = initObj.value || initObj.value === 0 ? initObj.value : this._value
  }

  get value(): number {
    return this._value
  }

  set value(value: number) {
    this._value = value
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }
}
