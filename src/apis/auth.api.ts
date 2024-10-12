import { SocialLoginType } from 'src/types/auth.type'
import http from 'src/utils/http'

export const URL_LOGIN = '/auth/google-login'
export const URL_REGISTER = 'register'
export const URL_LOGOUT = 'logout'
export const URL_REFRESH_TOKEN = '/auth/refresh-token'

const authApi = {
  login(body: SocialLoginType) {
    return http.post(URL_LOGIN, body)
  },
  logout() {
    return http.post(URL_LOGOUT)
  }
}

export default authApi
