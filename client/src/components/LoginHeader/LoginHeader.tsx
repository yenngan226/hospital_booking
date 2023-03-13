import React from 'react'
import { Link, useMatch } from 'react-router-dom'

export default function LoginHeader() {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <>
      <header className='py-5'>
        <div className='container'>
          <nav className='flex items-center justify-between'>
            <div className='text-xl font-semibold uppercase text-orange-600'>Booking care</div>
            <div className='ml-5 rounded-md px-2 py-1 text-lg text-gray-700 transition duration-200 lg:text-xl'>
              {isRegister ? 'Đăng ký' : 'Đăng nhập'}
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
