import React from 'react'
import {Header, Footer} from '../components'
import { Outlet } from 'react-router-dom'

function OutLet() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default OutLet