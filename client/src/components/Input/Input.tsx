import { InputHTMLAttributes, useState } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  className?: string

  register?: UseFormRegister<any>
  autoComplete?: string
}
const eyeIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='h-6 w-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
  </svg>
)
const eyeSlashIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='h-6 w-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
    />
  </svg>
)

export default function Input({
  errorMessage,
  className,
  classNameInput = 'w-full rounded-md border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm',
  classNameError = 'mt-1 min-h-[1.25rem] text-sm text-red-600',
  register,
  name,
  ...rest
}: Props) {
  const [isOpenEye, setIsOpenEye] = useState(false)
  const registerResult = register && name ? register(name) : {}
  const handleShowPW = () => {
    setIsOpenEye((prev) => !prev)
  }
  const handleType = () => {
    if (rest.type === 'password') {
      return isOpenEye ? 'text' : 'password'
    }
    return rest.type
  }
  return (
    <div className={className}>
      <div className='relative'>
        <input
          {...rest}
          className={classNameInput}
          {...registerResult}
          type={handleType()}
        />
        {rest.type === 'password' && isOpenEye && (
          <button
            className='absolute right-2 top-1/2 translate-y-[-50%] cursor-pointer text-slate-500'
            onClick={handleShowPW}
            type='button'
          >
            {eyeIcon}
          </button>
        )}
        {rest.type === 'password' && !isOpenEye && (
          <button
            className='absolute right-2 top-1/2 translate-y-[-50%] cursor-pointer text-slate-500'
            onClick={handleShowPW}
            type='button'
          >
            {eyeSlashIcon}
          </button>
        )}
      </div>
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
