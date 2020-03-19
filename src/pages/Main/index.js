import React from 'react';

import { Container, Content } from './styles';

export default function Main() {
  return (
    <Container>
      <Content>
        <h1>Teste THREAD</h1>
        <form>
          <input type="text" placeholder="Razão Social" />
          <input type="text" placeholder="Fantasia" />
          <div>
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="E-mail" />
          </div>
          <div className="address">
            <h4>Endereços</h4>
          </div>
          <input type="text"  placeholder="Logradouro" />
          <div>
            <input type="text" className="inp-md" placeholder="Complemento" />
            <input type="text" placeholder="CEP" />
          </div>
          <div>
          <input type="text" className="inp-md" placeholder="Ponto de referencia" />
          <label for="add_type">Tipo:</label>
            <select id="add_type">
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
            </select>
          </div>
          <div className="btn_group">
            <button type="submit">Salvar</button>
            <button type="button" className="bg-orange">Limpar</button>
          </div>
        </form> 
      </Content>
      
    </Container>
  );
}
