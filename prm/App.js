// MicroservicesApp/App.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const simulateAuthService = async () => {
  // Simula um serviço de autenticação
  return new Promise((resolve) => {
    setTimeout(() => {
      const token = 'token_simulado';
      resolve(token);
    }, 1000);
  });
};

const simulateDataService = async (token) => {
  // Simula um serviço de dados
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        { id: 1, nome: 'aaaaaaaa' },
        { id: 2, nome: 'BBBBBBBBB' },
        { id: 3, nome: 'CCCCCCCC' },
      ];
      resolve(data);
    }, 1000);
  });
};

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      // Simula a chamada ao serviço de autenticação
      const token = await simulateAuthService();

      // Simula a chamada ao serviço de dados usando o token
      const responseData = await simulateDataService(token);

      setData(responseData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Dados:</Text>
      {data.map((item) => (
        <Text key={item.id}>{item.nome}</Text>
      ))}
      <Button title="Recarregar Dados" onPress={fetchData} />
    </View>
  );
};

export default App;
