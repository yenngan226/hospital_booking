export const saveAccessTokenToLS = (accessToken: string): void => {
  localStorage.setItem('access_token', accessToken)
}
export const saveRefreshTokenToLS = (refreshToken: string): void => {
  localStorage.setItem('refresh_token', refreshToken)
}
export const getAccessToken = (): string => localStorage.getItem('access_token') || ''
export const getRefreshToken = (): string => localStorage.getItem('refresh_token') || ''
