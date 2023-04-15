import React from 'react'
import { Outlet } from 'react-router'

import Header from '../Containers/Header/Header'

function MainLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default MainLayout