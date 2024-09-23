import { PATH_URL } from 'src/constants/path'
import { Route } from 'src/interface/app'

// private routes (path, component)
export const PRIVATE_ROUTE: Route[] = [
  {
    path: PATH_URL.auth,
    element: () => import('src/pages/not-found')
  },
  {
    path: PATH_URL.personalFinance,
    element: () => import('src/pages/personal-finance/PersonalFinance')
  },
  {
    path: PATH_URL.groups,
    element: () => import('src/pages/groups/Groups')
  }
]

export const DEFAULT_ROUTE: Route[] = [
  {
    path: PATH_URL.home,
    element: () => import('src/pages/Home')
  }
]
