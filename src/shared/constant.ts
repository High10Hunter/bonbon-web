export const SECONDS_IN_DAY = 86400

export type UserOptions = {
  title: string
  icon: string
}

export const USER_DROPDOWN_OPTIONS: UserOptions[] = [
  {
    title: 'Settings',
    icon: 'fa:cog'
  },
  {
    title: 'Logout',
    icon: 'fa:sign-out'
  }
]

export type sidebarContent = {
  key: string
  label: string
  path: string
  icon: string
}

export const SIDEBAR_OPTIONS = [
  {
    key: 'personal-finance',
    label: 'Personal Finance',
    path: '/personal-finance',
    icon: 'fa:money'
  },
  {
    key: 'groups',
    label: 'Groups',
    path: '/groups',
    icon: 'fa:group'
  }
]
