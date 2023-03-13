import React, { lazy, Suspense } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import { path } from 'src/constants/path'
import LoginLayout from 'src/Layouts/LoginLayout'
import MainLayout from 'src/Layouts/MainLayout'

const Homepage = lazy(() => import('src/pages/Homepage'))
const LoginPage = lazy(() => import('src/pages/LoginPage'))
const RegisterPage = lazy(() => import('src/pages/RegisterPage'))

const ProtectedRoute = () => {
  return <Outlet />
}
const RejectedRoute = () => {
  return <Outlet />
}

export default function useRoute() {
  const route = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: (
            <Suspense>
              <Homepage />
            </Suspense>
          )
        }
      ]
    },
    { path: '/', element: <ProtectedRoute /> },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '',
          element: <LoginLayout />,
          children: [
            {
              path: path.login,
              element: (
                <Suspense>
                  <LoginPage />
                </Suspense>
              )
            },
            {
              path: path.register,
              element: (
                <Suspense>
                  <RegisterPage />
                </Suspense>
              )
            }
          ]
        }
      ]
    }
  ])
  return route
}
