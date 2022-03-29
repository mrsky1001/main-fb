/*
 * Copyright (c) 21.11.2021, 23:51  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import AppMessage from '../models/classes/app/AppMessage'

const exceptions = {
    DOWNLOADED: new AppMessage('Данные успешно получены!', 'green lighten-1'),
    SAVED: new AppMessage('Данные успешно сохранены!', 'green lighten-1'),
    REQUIRED_FIELD: new AppMessage('Обязательное поле!'),
    INCORRECT_PASSWORD_SYMBOLS: new AppMessage('Пароль должен содержать цифры и латинские буквы!'),
    INCORRECT_PASSWORD_MIN_LENGTH: new AppMessage('Пароль не может быть менее 3 символов!'),
    INCORRECT_PASSWORD_MAX_LENGTH: new AppMessage('Пароль не может быть более 20 символов!'),
    INCORRECT_USERNAME_SYMBOLS: new AppMessage('Имя может содержать цифры и латинские буквы!'),
    INCORRECT_USERNAME_MIN_LENGTH: new AppMessage('Имя не может быть менее 8 символов!'),
    INCORRECT_USERNAME_MAX_LENGTH: new AppMessage('Имя не может быть более 20 символов!'),
    INCORRECT_EMAIL: new AppMessage('Не корректный e-mail!'),
    NOT_ALLOWED_COMMENT: new AppMessage('Возможность комментирования доступна только авторизованным пользователям!'),
    ONE_COMMENT_IN_MIN: new AppMessage(
        'В целях улучшения безопасности, возможность комментирования ограничена до 1 комментария в минуту!'
    ),
    NOT_SAVED: new AppMessage('Внимание! Данные не сохранены!', 'red lighten-1'),
    DELETED: new AppMessage('Данные успешно удалены!', 'green lighten-1'),
    NOT_DELETED: new AppMessage('Внимание! Данные не удалось удалить!', 'red lighten-1'),
    LEAVING_PAGE: new AppMessage('Вы хотите уйти? У вас есть несохранённые изменения!', 'blue lighten-1'),
    NOT_VALID: new AppMessage('Внимание! Не все поля заполнены!', 'blue lighten-1'),
    NOT_SELECTED_TEXT: new AppMessage('Текст для изменения не выделен!', 'blue lighten-1'),
    INCORRECT_RANGE: new AppMessage(
        'Выбран не правильный диапазон для задания стиля текста! ' +
            '(скорее всего вы выбрали несколько смежных стилей для правки ' +
            '(например, курсивный текст и рядом с ним обычный текст, и хотите применить жирный шрифт - это ошибка, так делать нельзя)' +
            'выберите по отдельности части текста)',
        'blue lighten-1'
    ),
}

export default exceptions
