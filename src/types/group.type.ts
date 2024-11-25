import { Currency } from './spending.type'
interface Group {
  id: number
  name: string
  currency: Currency
  created_by: number
  total_spent: number
  total_members: number
  members: UserGroupDetail[]
}

interface RequestedGroup {
  name: string
  currency: Currency
  member_ids?: number[]
}

interface UserGroupDetail {
  id: number
  user_id: number
  full_name: string
  avatar: string
  total_spent: number
  can_edit: boolean
  is_owner: boolean
}

interface EventGroup {
  id: number
  group_id: number
  name: string
  created_at: string
  updated_at?: string
  can_modified: boolean
}

interface EventItem {
  id: number
  event_id: number
  name: string
  created_at: string
  updated_at?: string
  spendings: GroupSpending[]
}

interface GroupSpending {
  id: number
  member_id?: number
  full_name?: string
  avatar?: string
  amount: number
  price: number
  currency: Currency
  is_main_spender?: boolean
}

interface UserRefund {
  id: number
  user_id: number
  full_name: string
  avatar: string
  bank_account?: string
  bank_name?: string
}
interface Refund {
  id: number
  from_member: UserRefund
  to_member: UserRefund
  amount: number
  currency: Currency
  is_transferred: boolean
  is_received: boolean
  created_at: string
}

export type { Group, RequestedGroup, UserGroupDetail, EventGroup, EventItem, GroupSpending, Refund }
