import React from 'react';
import Navbar from '../../components/Navbar';
import { Container, Content, ContentSearch } from './styles';
import CustomSelect from '../../components/CustomSelect'; 
import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

const options = [
  { value: 'residencial', label: 'Residencial' },
  { value: 'comercial', label: 'Comercial' }
];

const schema = Yup.object().shape({
  tipo: Yup.object().shape({
    label: Yup.string(),
    value: Yup.string()
  })
});

export default function Lista() {

  function handleSubmit({tipo}){

    console.log(tipo.value);
  }

  return (
    <Container>
      <Content>
        <h1>TESTE - THREAD SISTEMAS</h1>
          <h3>Uma aplicação para criar cadastro de clientes com endereços.</h3>
          <Navbar />
            <h1> Listagem de clientes  </h1>
            <Form onSubmit={handleSubmit} schema={schema}>
              <ContentSearch>
                <CustomSelect name="tipo" placeholder={'Tipo de endereço'} options={options} isSearchable={false}/>
                <button type="submit"> Buscar </button>
              </ContentSearch>
            </Form>
      </Content>
    </Container>
  );
}
