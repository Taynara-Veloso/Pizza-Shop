import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <h1>default</h1>
      <Outlet />
    </div>
  )
}
