export interface SuccessResponse<Data> {
  message: string
  data: Data
}
export interface ErrorResponse<Data> {
  message: string
  data?: Data
}

// the syntax `-?` will remove the undefined of the optional key
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}

export type Nameable = {
  name?: string
  full_name?: string
}

export interface SelectOption {
  label: string
  value: number
}
