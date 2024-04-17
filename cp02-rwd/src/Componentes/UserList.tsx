import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// componente criado para consumo de API
// este componente retorna os Users da API
const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);
  const navegacao = useNavigate(); // aplicação de usenavigate para retornar a página anterior

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Falha ao buscar usuários');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao carregar usuários', error);
    }
  };

  const handleBackButton = () => {
    navegacao(-1);
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <button className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleBackButton}>Voltar</button>
      </div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;



