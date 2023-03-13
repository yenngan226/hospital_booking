// Kĩ thuật predicate type để check kiểu
//Kiểu ErrorFormObject có dạng bao quát cho toàn app
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

interface ErrorFormObject {
  [key: string | number]: string | ErrorFormObject | ErrorFormObject[]
}
interface EntityError {
  status: 422
  data: {
    error: ErrorFormObject
  }
}

//Xác nhận xem error có thuộc dạng FetchBaseQueryError hay không
export const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Xác nhận xem error có thuộc dạng SerializedError
export const isErrorWithMessage = (error: unknown): error is { message: string } => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  )
}

export const isEntityError = (error: unknown): error is EntityError => {
  return (
    isFetchBaseQueryError(error) &&
    typeof error === 'object' &&
    error.status === 422 &&
    error.data !== null &&
    !(error.data instanceof Array)
  )
}

export class CustomError extends Error {
  constructor(message: any) {
    super(message)
    this.name = 'CustomError'
  }
}
