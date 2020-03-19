import React from 'react';
import Navbar from '../../components/Navbar';
import { Container, Content } from './styles';
import CustomSelect from '../../components/CustomSelect'; 
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const optionsSelect = [
  { value: 'residencial', label: 'Residencial' },
  { value: 'comercial', label: 'Comercial' }
];

const schema = Yup.object().shape({
  rz_social: Yup.string().required('Razão social é obrigatório.'),
  fantasia: Yup.string(),
  telefone: Yup.string().required('Telefone é obrigatório.'),
  email: Yup.string().email('Insira um e-mail válido.').required('Telefone é obrigatório.'),
  logradouro: Yup.string().required('Logradouro é obrigatório.'),
  complemento: Yup.string().required('Complemento é obrigatório.'),
  cep: Yup.string().required('CEP é obrigatório.'),
  referencia: Yup.string().required('Referencia é obrigatório.'),
  tipo: Yup.string().required('Tipo obrigatório'),
});

export default function Main() {
  /**
   * Submit form 
   */
  function handleSubmit(data){
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <h1>TESTE - THREAD SISTEMAS</h1>
          <h3>Uma aplicação para criar cadastro de clientes com endereços.</h3>
          <Navbar />
        <Form onSubmit={handleSubmit} schema={schema}>
          <div>
            <Input name="rz_social" type="text" className="inp-custom" placeholder="Razão Social" />
          </div>
          <div style={{marginTop: 10}}>
            <Input name="fantasia" type="text" className="inp-custom" placeholder="Fantasia" />
          </div>
          
          {/* <Input name="fantasia" type="text" className="inp-custom" placeholder="Fantasia" /> */}

          <div className="inp-group">
            <div className="margin-r">
              <Input name="telefone" type="text" className="inp-custom" placeholder="Telefone" />
            </div>
            <div>
              <Input name="email" type="text" className="inp-custom" placeholder="E-mail" />
            </div>
          </div>
            <h4>Endereços</h4>
          <div>
            <Input name="logradouro" type="text" className="inp-custom" placeholder="Logradouro" />
          </div>
          
          <div className="inp-group">
            <div className="margin-r">
              <Input name="complemento" type="text" className="inp-custom" placeholder="Complemento" />
            </div>
            <div>
              <Input name="cep" type="text" className="inp-custom" placeholder="CEP" />
            </div>
          </div>
          <div className="group-select" >
            <div style={{marginRight: 20}}>
              <Input name="referencia" type="text" className="inp-custom" placeholder="Ponto de referencia" />
            </div>
            <div>
              <CustomSelect name="tipo" placeholder={'Tipo de endereço'} options={optionsSelect} isSearchable={false}/>
            </div>
          
          </div>
          <div className="btn_group">
            <button type="submit">Salvar</button>
            <button type="button" className="bg-orange">Limpar</button>
          </div>
        </Form> 
      </Content>
    </Container>
  );
}
