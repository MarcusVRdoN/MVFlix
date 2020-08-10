import React from 'react'
import Logo from '../../assets/img/logo.png'
import { Button } from '../Button/styles'
import './Menu.css'

function Menu() {
  return (
    <header>
      <nav className="menu">
        <a href="/">
          <img className="logo" src={Logo} alt="MVFlix logo"/>
        </a>
        <Button as="a" className="bottom-link" href="/">
          Novo vídeo
        </Button>
      </nav>
    </header>
  )
}

export default Menu