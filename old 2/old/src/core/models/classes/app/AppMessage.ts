/*
 * Copyright (c) 21.11.2021, 23:32  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IAppMessage} from '@/core/models/interfaces/app/IAppMessage'

export default class AppMessage implements IAppMessage {
  private readonly _text: string
  private readonly _classes: string

  constructor(text: string, classes = 'black') {
    this._text = text
    this._classes = classes
  }

  get text(): string {
    return this._text
  }

  get classes(): string {
    return this._classes
  }

  toString(): string {
    return this._text
  }
}
