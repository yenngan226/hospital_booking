import { authConstant } from 'src/constants/authConstant'
import http from '../http'
import { AuthResponse } from 'src/types/auth.type'

const baseURL = '/api/user'
export const AuthApi = {
  register: (body: { email: string; password: string }) => {
    return http.post(authConstant.register, body)
  },
  login: (body: { email: string; password: string }) => {
    return http.post<AuthResponse>(`${baseURL}/${authConstant.login}`, body)
  },
  logout: () => {
    return http.post(authConstant.logout)
  }
}
