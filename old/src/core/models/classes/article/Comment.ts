/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import statuses from '@/core/collections/statuses'
import {IComment} from '@/core/models/interfaces/article/IComment'
import {IUser} from '@/core/models/interfaces/auth/IUser'
import {IStatus} from '@/core/models/interfaces/article/IStatus'
import GenericModel from '@/core/models/classes/app/GenericModel'

export default class Comment extends GenericModel implements IComment {
  private _creatingDate = ''
  private _content = ''
  private _postId = ''
  private _parentId = ''
  private _errorMsg = ''
  private _author: IUser | null = null
  private _status: IStatus = statuses.DRAFT

  constructor(initObj: IComment) {
    super(initObj)
    this.init(initObj)
  }

  init(initObj: IComment): void {
    this.author = initObj.author ? initObj.author : this._author
    this.content = initObj.content ? initObj.content : this._content
    this.postId = initObj.postId ? initObj.postId : this._postId
    this.parentId = initObj.parentId ? initObj.parentId : this._parentId
    this.creatingDate = initObj.creatingDate ? initObj.creatingDate : this._creatingDate
    this.status = initObj.status ? initObj.status : this._status
    this.errorMsg = initObj.content ? initObj.content : this._errorMsg
  }

  get postId(): string {
    return this._postId
  }

  set postId(value: string) {
    this._postId = value
  }

  get parentId(): string {
    return this._parentId
  }

  set parentId(value: string) {
    this._parentId = value
  }

  get author(): IUser | null {
    return this._author
  }

  set author(value: IUser | null) {
    this._author = value
  }

  get content(): string {
    return this._content
  }

  set content(value: string) {
    this._content = value
  }

  get creatingDate(): string {
    return this._creatingDate
  }

  set creatingDate(value: string) {
    this._creatingDate = value
  }

  get status(): IStatus {
    return this._status
  }

  set status(value: IStatus) {
    this._status = value
  }

  get errorMsg(): string {
    return this._errorMsg
  }

  set errorMsg(value: string) {
    this._errorMsg = value
  }
}
