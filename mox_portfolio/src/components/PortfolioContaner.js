import React from 'react'
import TopLabel from './TopLabel'
import NavBar from './NavBar'
import Intro from './Intro'
import Projects from './Projects'
import '../assests/css/PortfolioContainer.css'

export default function PortfolioContaner() {
  return (
    <div className='content'>
     < Intro />
     <Projects />
      <NavBar />
    </div>
  )
}
