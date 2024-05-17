import Footers from './Footers'
import Navbars from './Navbars'
import { Outlet } from 'react-router-dom'

const NavbarFooter = () => {
  return (
    <>
      <Navbars />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footers />
    </>
  )
}

export default NavbarFooter