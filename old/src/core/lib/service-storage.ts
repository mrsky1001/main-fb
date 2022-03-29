/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

const mainStorageName = '__fomaBlog'
const spacer = '_'

export default {
  getProp(name: string): any {
    const temp = localStorage.getItem(mainStorageName + spacer + name)
    return JSON.parse(String(temp))
  },
  setProp(name: string, value: any): void {
    localStorage.setItem(mainStorageName + spacer + name, JSON.stringify(value))
  },
}
