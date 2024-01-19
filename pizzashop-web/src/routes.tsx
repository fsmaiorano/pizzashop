import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app-layout'
import { AuthLayout } from './pages/_layouts/auth-layout'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
])
