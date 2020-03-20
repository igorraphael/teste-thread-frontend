import React,{ useState, useEffect } from 'react';
import { TableContainer } from './styles';
import api from '../../services/api';

export default function Table( {addressType} ) {
  const [clients, setClients] = useState(null);
  const [load, setLoad] = useState(true);
  
  useEffect(() => {
    async function loadClients(){
      if (!addressType) return;
      const response = await api.get('/address', { params: { tipo: addressType } });
      setLoad(false);
      setClients(response.data);
    }
    loadClients();
  }, [addressType]);

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Email</th>
          <th>Endereço</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        { load && <tr><td></td><td>...</td><td>...</td><td></td></tr> }
        { clients && clients.map((cli, index )=> (
          <tr key={index}>
            <td>{cli.client.rz_social}</td>
            <td>{cli.client.email}</td>
            <td>{`${cli.logradouro}. ${cli.complemento}`}</td>
            <td>{cli.tipo}</td>
          </tr>
          ))}
      </tbody>
    </TableContainer> 
  );
}
