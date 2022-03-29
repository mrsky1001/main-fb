/*
 * Copyright (c)  Kolyada Nikita Vladimirovich <nikita.nk16@yandex.ru> 10.10.2021, 15:26
 */

// const checkAuth = (to, from, next, role = roles.USER) => {
//   User.checkRole(role) && services.isAuthorized() ? next() : next(routesObj.LOGIN)
// }

import routesObj from '@/app/routes/routes-obj'
import { IRoute } from '@/core/models/interfaces/app/IRoute'
import Home from '@/app/views/Home/Home.vue'

const routesComponents = {
    HOME: Object.assign(routesObj.HOME, { component: Home }),

    // LOGIN: Object.assign(routesObj.LOGIN, { component: Login }),
    // ACCOUNT: Object.assign(routesObj.ACCOUNT, { component: Account }),
    // REGISTRATION: Object.assign(routesObj.REGISTRATION, { component: Registration }),
    // LOGOUT: Object.assign(routesObj.LOGOUT, { component: Logout }),
    // DELETE_ACCOUNT: Object.assign(routesObj.DELETE_ACCOUNT, { component: DeleteAccount }),
    //
    // ALL: routesObj.ALL,
}

export const routes: Array<IRoute> = Object.values(routesComponents)
