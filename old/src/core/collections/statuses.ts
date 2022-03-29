/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

import Status from '@/core/models/classes/article/Status'

export const statuses = {
  DRAFT: new Status({text: 'Черновик', value: 0, icon: 'mdi-upload-off', color: 'red'}),
  MODERATION: new Status({text: 'На модерации', value: 1, icon: 'mdi-lock-clock', color: 'yellow'}),
  PUBLISHED: new Status({text: 'Опубликовано', value: 2, icon: 'mdi-upload', color: 'green'}),
}

// export const parseStatus = value => {
//   if (typeof value === 'object') {
//     return value
//   } else if (typeof value === 'number' || typeof value === 'string') {
//     const key = Object.keys(statuses).find(k => String(statuses[k].value) === String(value))
//     return statuses[key]
//   }
// }

export default statuses
