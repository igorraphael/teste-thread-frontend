import React from 'react';
import Navbar from '../../components/Navbar';
import { Container, Content } from './styles';
import CustomSelect from '../../components/CustomSelect'; 
import InputMask from '../../components/InputMask'; 
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../services/api';

const optionsSelect = [
  { value: 'residencial', label: 'Residencial' },
  { value: 'comercial', label: 'Comercial' }
];

const schema = Yup.object().shape({
  rz_social: Yup.string().required('Razão social é obrigatório.'),
  fantasia: Yup.string(),
  telefone: Yup.string().required('Telefone é obrigatório.'),
  email: Yup.string().email('Insira um e-mail válido.').required('E-mail é obrigatório.'),
  logradouro: Yup.string().required('Logradouro é obrigatório.'),
  complemento: Yup.string().required('Complemento é obrigatório.'),
  cep: Yup.string().required('CEP é obrigatório.'),
  referencia: Yup.string().required('Referencia é obrigatório.'),
  tipo: Yup.object().shape({
    label: Yup.string(),
    value: Yup.string()
  })
});

export default function Main() {
  /**
   * Submit form 
   */
  async function handleSubmit({ rz_social, fantasia, telefone, email, logradouro, complemento, cep, referencia, tipo }){
    const value = tipo.value;
      try {
        const res = await api.post('/clients', { rz_social, fantasia, telefone, email, logradouro, complemento, cep, referencia, tipo: value });
        if(res.status === 200){
          alert('Cadastro realizado com sucesso!');
        }
      } catch (error) {
        const { data } = error.response;
        alert(data.error);
      }
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
          <div className="inp-group">
            <div className="margin-r">
              <InputMask mask="(99) 9999-9999" name="telefone" type="text" className="inp-custom" placeholder="Telefone" />
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
              <InputMask mask="99999-999" name="cep" type="text" className="inp-custom" placeholder="CEP" />
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
            <button type="reset" className="bg-orange">Limpar</button>
          </div>
        </Form> 
      </Content>
    </Container>
  );
}
