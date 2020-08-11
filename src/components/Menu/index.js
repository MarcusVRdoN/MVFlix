import React from 'react'
import Logo from '../../assets/img/logo.png'
import { Button } from '../Button/styles'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <header>
      <nav className="menu">
        <Link to="/">
          <img className="logo" src={Logo} alt="MVFlix logo"/>
        </Link>
        <Button as={Link} className="bottom-link" to="/cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    </header>
  )
}

export default Menu