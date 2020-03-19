import React from 'react';
import Navbar from '../../components/Navbar';
import { Container, Content } from '../Main/styles';

export default function Lista() {
  return (
    <Container>
      <Content>
        <h1>TESTE - THREAD SISTEMAS</h1>
          <h3>Uma aplicação para criar cadastro de clientes com endereços.</h3>
          <Navbar />
          <div>
            <h1> Listagem de clientes  </h1>
          </div>
      </Content>
      
    </Container>
  );
}
