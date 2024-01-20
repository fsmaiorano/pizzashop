import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-5 w-5" />
          <span>Pizza Shop</span>
        </div>
        <footer className="text-sm">
          <p>&copy; 2021 Pizza Shop. All rights reserved.</p>
        </footer>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <Outlet />
      </div>
    </div>
  )
}
