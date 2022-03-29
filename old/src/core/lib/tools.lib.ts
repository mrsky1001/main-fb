/*
 * Copyright (c) 21.11.2021, 21:42  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

export const getTimeSalt = (): string => `?t=${new Date().getTime()}`
