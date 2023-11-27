import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AdicionarTarefas = ({onAdicionarTarefa}) => {
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleAdicionarTarefa = () => {
    onAdicionarTarefa(novaTarefa); // Chame a função de atualização passada como prop
    setNovaTarefa('');
  };

  return (
    <View>
      <Text>Adicionar Tarefa:</Text>
      <TextInput
        value={novaTarefa}
        onChangeText={(text) => setNovaTarefa(text)}
        placeholder="Nova Tarefa"
      />
      <Button title="Adicionar" onPress={handleAdicionarTarefa} />
    </View>
  );
};

export default AdicionarTarefas;
