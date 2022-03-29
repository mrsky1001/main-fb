/*
 * Copyright (c) 21.11.2021, 23:34  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IStatus} from '@/core/models/interfaces/article/IStatus'
import GenericModel from '@/core/models/classes/app/GenericModel'

export default class Status extends GenericModel {
  private _text = ''
  private _icon = ''
  private _color = ''
  private _value: number = 0

  constructor(initObj: IStatus) {
    super(initObj)
    this.init(initObj)
  }

  init(initObj: IStatus): void {
    this._text = initObj.text ? initObj.text : this._text
    this._value = initObj.value ? initObj.value : this._value
    this._icon = initObj.icon ? initObj.icon : this._icon
    this._color = initObj.color ? initObj.color : this._color
  }

  get text(): string {
    return this._text
  }

  get icon(): string {
    return this._icon
  }

  get color(): string {
    return this._color
  }

  get value(): number {
    return this._value
  }
}
