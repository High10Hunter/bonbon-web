import { SuccessResponse } from './utils.type'
export interface SelectOption {
  label: string
  value: number
}

export type SocialLoginType = {
  id_token: string
}

export type AuthResponse = SuccessResponse<{
  access_token: string
  refresh_token: string
  // expiresRefreshToken: number
  // expires: number
}>

export type RefreshTokenResponse = SuccessResponse<{ token: string }>
