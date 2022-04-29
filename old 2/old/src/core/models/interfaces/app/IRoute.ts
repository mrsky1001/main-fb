/*
 * Copyright (c) 21.11.2021, 23:19  Kolyada Nikita Vladimirovich nikita.nk16@yandex.ru
 */

import {IRole} from '@/core/models/interfaces/auth/IRole'

export interface IRoute {
  path: string
  name: string
  text?: string
  icon?: string
  group?: string
  role: IRole

  hasIcon?: boolean
  onMainBar?: boolean
  isSection?: boolean
  isGroup?: boolean
  isCenterSidebar?: boolean
  onCenterSidebar?: boolean
  hasSubLine?: boolean
  onAvatarBar?: boolean

  meta?: {
    title?: string
    description?: string
  }
}
