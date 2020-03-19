import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Navbar() {
  return (
    <Container>
        <NavLink exact to="/" activeClassName="nav-active">Cadastro</NavLink>
        <NavLink to="/new" activeClassName="nav-active">Lista</NavLink>
    </Container>
  );
}
