/*
 * Copyright (c) 21.11.2021, 23:33  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IAnnotation} from '@/core/models/interfaces/article/IAnnotation'
import GenericModel from '@/core/models/classes/app/GenericModel'

export default class Annotation extends GenericModel {
  private _text = ''
  private _imgUrl = ''
  private _keywords: string[] = []
  private _imgFile?: File

  constructor(initObj?: IAnnotation) {
    super(initObj)
    if (initObj) {
      this.init(initObj)
    } else {
      this.emptyInit()
    }
  }

  emptyInit() {
    this.text = ''
    this.imgUrl = ''
    this.keywords = []
  }

  init(initObj: IAnnotation): void {
    this.text = initObj.text ? initObj.text : this._text
    this.imgUrl = initObj.imgUrl ? initObj.imgUrl : this._imgUrl
    this.keywords = initObj.keywords ? initObj.keywords : this._keywords
    this.imgFile = initObj.imgFile ? initObj.imgFile : this._imgFile
  }

  // setText(val) {
  //   this.text = val
  // }
  //
  // setImg(val) {
  //   this.img = val
  // }
  //
  // setImgAuthor(val) {
  //   this.imgAuthor = val
  // }
  //
  // setImgFile(val) {
  //   this.imgFile = val
  // }
  //
  // setKeywords(val) {
  //   this.keywords = val
  // }

  get text(): string {
    return this._text
  }

  set text(value: string) {
    this._text = value.trim()
  }

  get keywords(): string[] {
    return this._keywords
  }

  set keywords(value: string[]) {
    this._keywords = value
  }

  get imgFile(): File | undefined {
    return this._imgFile
  }

  set imgFile(value: File | undefined) {
    this._imgFile = value
  }

  get imgUrl(): string {
    return this._imgUrl
  }

  set imgUrl(value: string) {
    this._imgUrl = value
  }
}
