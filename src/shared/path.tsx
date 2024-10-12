import { PATH_URL } from 'src/constants/path'
import { Route } from 'src/interface/app'

// private routes (path, component)
export const AUTH_ROUTES: Route[] = [
  {
    path: PATH_URL.login,
    element: () => import('src/pages/login/Login')
  }
]

export const PRIVATE_ROUTES: Route[] = [
  {
    path: PATH_URL.home,
    element: () => import('src/pages/Home')
  },
  {
    path: PATH_URL.personalFinance,
    element: () => import('src/pages/personal-finance/PersonalFinance')
  },
  {
    path: PATH_URL.groups,
    element: () => import('src/pages/groups/Groups')
  },
  {
    path: PATH_URL.settings,
    element: () => import('src/pages/settings/Settings')
  }
]

export const DEFAULT_ROUTE: Route[] = [
  {
    path: PATH_URL.home,
    element: () => import('src/pages/not-found')
  }
]
