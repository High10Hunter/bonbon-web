export enum Currency {
  USD = 'USD',
  VND = 'VND'
}

export interface SpendingDetail {
  id: number
  name: string
  amount: number
  currency: Currency
  time: Date
  type: string
  category_id: number
  category_name?: string
  category_icon?: string
}
