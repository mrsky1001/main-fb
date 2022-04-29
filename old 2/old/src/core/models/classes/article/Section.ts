/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import GenericModel from '@/core/models/classes/app/GenericModel'
import {IPost} from '@/core/models/interfaces/article/IPost'
import {IUser} from '@/core/models/interfaces/auth/IUser'
import User from '@/core/models/classes/auth/User'
import {ISection} from '@/core/models/interfaces/article/ISection'

export default class Section extends GenericModel implements ISection {
  private _name: string = ''
  private _description: string = ''
  private _posts: IPost[] = []
  private _creatingDate = new Date()
  private _author: IUser = new User()

  constructor(initObj?: ISection) {
    super(initObj)
    initObj && this.init(initObj)
  }

  init(initObj: ISection): void {
    this.name = initObj.name ? initObj.name : this._name
    this.description = initObj.description ? initObj.description : this._description
    this.posts = initObj.posts ? initObj.posts : this._posts
    this.author = initObj.author ? initObj.author : this._author
    this.creatingDate = initObj.creatingDate ? initObj.creatingDate : this._creatingDate

    this.jsonFormatObjects = [{name: 'status', valuePath: 'value'}]
  }

  get description(): string {
    return this._description
  }

  set description(value: string) {
    this._description = value
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get posts(): IPost[] {
    return this._posts
  }

  set posts(value: IPost[]) {
    this._posts = value
  }

  get creatingDate(): Date {
    return this._creatingDate
  }

  set creatingDate(value: Date) {
    this._creatingDate = value
  }

  get author(): IUser {
    return this._author
  }

  set author(value: IUser) {
    this._author = value
  }
}
