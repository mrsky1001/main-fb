/*
 * Copyright (c) 08.01.2022, 23:32  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

export const dateAndTime = (rawDate: string | Date): string => {
  const date = new Date(rawDate)
  const hours: string = date.getHours().toString()
  const minutes: string = date.getMinutes().toString()

  const dateStr: string = date.toLocaleDateString()
  const hoursStr: string = hours.length > 1 ? hours : '0' + hours
  const minutesStr: string = minutes.length > 1 ? minutes : '0' + minutes

  return dateStr + ' / ' + hoursStr + ':' + minutesStr
}
