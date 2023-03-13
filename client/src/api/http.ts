import axios, { AxiosInstance } from 'axios'
import { config } from 'src/constants/config'
import { getAccessToken, getRefreshToken } from 'src/utils/auth.utils'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import type { AxiosRequestConfig, AxiosError } from 'axios'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  constructor() {
    ;(this.accessToken = getAccessToken()),
      (this.refreshToken = getRefreshToken()),
      (this.instance = axios.create({
        baseURL: config.baseURL,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json'
        }
      }))
  }
}

const http = new Http().instance
export default http
