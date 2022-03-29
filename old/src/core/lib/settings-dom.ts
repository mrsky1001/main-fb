/*
 * Copyright (©) 09.07.2021, 17:13. Kolyada Nikita Vladimirovich (nikita.nk16@yandex.ru)
 */

export default {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  rules: [
    (value: any) => !!value || 'Обязательное поле.',
    (value: any) => (value && value.length >= 3) || 'Минимум 3 символа',
  ],
}
