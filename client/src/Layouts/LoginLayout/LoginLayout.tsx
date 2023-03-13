import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import LoginHeader from 'src/components/LoginHeader'

export default function LoginLayout() {
  return (
    <div>
      <LoginHeader />
      <Outlet />
      <Footer />
    </div>
  )
}
