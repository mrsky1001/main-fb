/*
 * Copyright (c) 07.01.2022, 22:44  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IRule} from '@/core/models/interfaces/lib/IRule'

export const validationProp = (obj: any, array: IRule[], listError: string[], name?: string): void => {
  array.forEach((rule: IRule) => {
    // @ts-ignore
    const val = name ? obj[name][rule.name] : obj[rule.name]

    if (rule.type === 'string') {
      rule.label && rule.min && String(val).length < rule.min && listError.push(rule.label)
    } else if (rule.type === 'object' && rule.listCheckFields) {
      validationProp(obj, rule.listCheckFields, listError, rule.name)
    } else if (rule.type === 'array') {
      rule.label && rule.min && val.length < rule.min && listError.push(rule.label)
    }
  })
}
