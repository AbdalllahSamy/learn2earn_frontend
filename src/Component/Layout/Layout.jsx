import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
 
  return (
    <>
      {/* <Navbar /> */}
      <Outlet></Outlet>
      {/* <Footer /> */}

    </>
  )
}
