import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from '@/pages/_layouts/auth'
import { DefaultLayout } from '@/pages/_layouts/default'
import { Dashboard } from '@/pages/app/dashboard'
import { SignIn } from '@/pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
