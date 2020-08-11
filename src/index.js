import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'

import Home from './pages/Home'
import CadastroVideo from './pages/Video'
import CadastroCategoria from './pages/Categoria'

const Pagina404 = () => (<div>404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
      <Home />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
