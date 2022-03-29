/*
 * Copyright (c) 21.11.2021, 23:30  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IGenericModel} from '@/core/models/interfaces/app/IGenericModel'

export default class GenericModel implements IGenericModel {
  _id: string
  jsonFormatObjects?: [
    {
      name: string
      valuePath: string
    }
  ]

  constructor(initObj: IGenericModel = {}) {
    initObj && this.initSuper(initObj)
  }

  initSuper(initObj: IGenericModel = {}): void {
    this.id = initObj._id ? initObj._id : initObj.id ? initObj.id : ''
  }

  update(obj: IGenericModel): void {
    if (obj)
      Object.keys(this).forEach((key) => {
        const k = key.replace('_', '')
        // @ts-ignore
        this[k] = obj[k] ? obj[k] : this[k]
      })
  }

  static assign(obj: IGenericModel, obj2: IGenericModel): IGenericModel {
    const copy = Object.assign({}, obj)

    Object.keys(copy).forEach((key: string) => {
      const oldVal = copy[key as keyof IGenericModel]
      const k = key.replace('_', '')
      // @ts-ignore
      copy[k] = obj2[k as keyof IGenericModel] !== undefined ? obj2[k as keyof IGenericModel] : oldVal
    })

    return copy
  }

  toJSON(): IGenericModel {
    const res = {}

    const replaceUnderLine = (key: string, k: string) => {
      const keyAs = key as keyof IGenericModel
      const obj = this[keyAs]

      if (obj && typeof obj === 'object' && 'toJSON' in obj) {
        // @ts-ignore
        res[k] = obj.toJSON()
      } else {
        // @ts-ignore
        res[k] = this[keyAs]
      }
    }

    Object.keys(this).forEach((key) => {
      const k = key.replace('_', '')

      if (this.jsonFormatObjects) {
        const obj = this.jsonFormatObjects.find((e) => e.name === k)
        const valPath = obj ? obj.valuePath : undefined

        if (valPath) {
          // @ts-ignore
          res[k] = this[key][valPath]
        } else replaceUnderLine(key, k)
      } else replaceUnderLine(key, k)
    })

    return res
  }

  get id(): string {
    // | undefined
    return this._id
  }

  set id(value: string) {
    // | undefined
    this._id = value
  }
}
