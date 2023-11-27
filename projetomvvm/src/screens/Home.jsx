import React from 'react';
import { View, Text } from 'react-native';
import Componente from '../components/Componente';
import Mensagem from '../viewmodels/Mensagem';
import Botao from '../components/Botao';

const Home = () => {
  const viewModel = Mensagem();

  return (
    <View>
      <Text>Lista de Mensagens</Text>
      <Botao title="Atualizar Mensagem" onPress={viewModel.atualizarMensagem} />
      <Componente texto={viewModel.mensagem} />
    </View>
  );
};

export default Home;
