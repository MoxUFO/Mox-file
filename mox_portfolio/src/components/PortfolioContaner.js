import React from 'react'
import TopLabel from './TopLabel'
import NavBar from './NavBar'
import Intro from './Intro'
import Projects from './Projects'

export default function PortfolioContaner() {
  return (
    <div>
        <TopLabel />
       <div>
       <Intro />
       
       </div>
        <NavBar />
    </div>
  )
}
