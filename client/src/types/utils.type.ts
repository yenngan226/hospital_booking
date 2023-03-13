export interface ErrorResponse<Data> {
  message: 'string'
  data?: Data
}
export interface SuccessResponse<Data> {
  errMessage: 'string'
  errCode: number
  data: Data
}
