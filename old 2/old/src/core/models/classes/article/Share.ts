/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import GenericModel from '@/core/models/classes/app/GenericModel'
import {IShare} from '@/core/models/interfaces/article/IShare'

export default class Share extends GenericModel {
  private _postId = ''

  constructor(initObj: IShare) {
    super(initObj)
    this.init(initObj)
  }

  init(initObj: IShare): void {
    this.postId = initObj.postId ? initObj.postId : this._postId
  }

  get postId(): string {
    return this._postId
  }

  set postId(value: string) {
    this._postId = value
  }
}
